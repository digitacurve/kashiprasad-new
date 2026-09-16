import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, trackingNumber, courierName, notes } = body;

    const supabase = createAdminClient();

    const updatePayload: Record<string, any> = {
      updated_at: new Date().toISOString(),
    };

    if (status) updatePayload.status = status;
    if (trackingNumber !== undefined) updatePayload.tracking_number = trackingNumber;
    if (courierName !== undefined) updatePayload.courier_name = courierName;
    if (notes !== undefined) updatePayload.notes = notes;

    const { data, error } = await supabase
      .from("orders")
      .update(updatePayload)
      .eq("id", id)
      .select();

    if (error) {
      console.warn("Supabase update order error:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, order: data?.[0] || updatePayload });
  } catch (err: any) {
    console.error("API PATCH /api/orders/[id] error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createAdminClient();

    const { error } = await supabase.from("orders").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "Order deleted successfully" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
