import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const supabase = createAdminClient();

    // Fetch all profiles along with their orders count
    const { data: profiles, error: profileErr } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (profileErr) {
      console.warn("Supabase fetch profiles error:", profileErr.message);
      return NextResponse.json({ success: false, error: profileErr.message, customers: [] });
    }

    // Fetch orders to compute stats
    const { data: orders } = await supabase
      .from("orders")
      .select("id, user_id, customer_phone, total_amount, status, created_at");

    const customersWithStats = (profiles || []).map((p: any) => {
      const userOrders = (orders || []).filter(
        (o: any) => o.user_id === p.id || o.customer_phone === p.phone
      );
      const totalSpend = userOrders.reduce(
        (acc: number, o: any) => acc + (Number(o.total_amount) || 0),
        0
      );

      return {
        id: p.id,
        name: p.name || p.full_name || "Blessed Devotee",
        phone: p.phone || "—",
        email: p.email || "—",
        joinedDate: new Date(p.created_at).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        totalOrders: userOrders.length,
        totalSpend,
        lastOrderDate: userOrders.length > 0 ? userOrders[0].created_at : null,
      };
    });

    return NextResponse.json({ success: true, customers: customersWithStats });
  } catch (err: any) {
    console.error("API GET /api/customers error:", err);
    return NextResponse.json({ success: false, error: err.message, customers: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phone, name, email, id } = body;

    if (!phone) {
      return NextResponse.json(
        { success: false, error: "Phone number is required" },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const profileData = {
      id: id || phone,
      phone,
      name: name || "Blessed Devotee",
      email: email || null,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("profiles")
      .upsert(profileData, { onConflict: "phone" })
      .select();

    if (error) {
      console.warn("Supabase profile upsert error:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, profile: data?.[0] || profileData });
  } catch (err: any) {
    console.error("API POST /api/customers error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
