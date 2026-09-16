import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(req: NextRequest) {
  try {
    const supabase = createAdminClient();

    // Fetch all orders with their items
    const { data: orders, error } = await supabase
      .from("orders")
      .select(`
        *,
        items:order_items(*)
      `)
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("Supabase fetch orders error:", error.message);
      return NextResponse.json({ success: false, error: error.message, orders: [] });
    }

    return NextResponse.json({ success: true, orders: orders || [] });
  } catch (err: any) {
    console.error("API GET /api/orders error:", err);
    return NextResponse.json({ success: false, error: err.message, orders: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      orderNumber,
      total,
      items,
      shippingAddress,
      paymentMethod = "COD",
      customerName,
      customerPhone,
      customerEmail,
      userId,
      notes,
    } = body;

    const orderId = body.id || `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const generatedOrderNumber =
      orderNumber || `KP-${Math.floor(100000 + Math.random() * 900000)}`;

    const supabase = createAdminClient();

    // 1. If customer phone is provided, upsert into profiles
    const phone = customerPhone || shippingAddress?.phone;
    const name = customerName || shippingAddress?.fullName;

    if (phone) {
      try {
        await supabase.from("profiles").upsert(
          {
            id: userId || phone,
            phone: phone,
            name: name || "Blessed Devotee",
            email: customerEmail || null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "phone" }
        );
      } catch (profileErr) {
        console.warn("Profile upsert warning:", profileErr);
      }
    }

    // 2. Insert into orders table
    const orderRecord = {
      id: orderId,
      order_number: generatedOrderNumber,
      user_id: userId || phone || "guest",
      customer_name: name || "Devotee",
      customer_phone: phone || "",
      customer_email: customerEmail || "",
      shipping_address: shippingAddress || {},
      total_amount: total,
      payment_method: paymentMethod,
      status: "Confirmed",
      notes: notes || "",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { error: orderError } = await supabase.from("orders").insert(orderRecord);

    if (orderError) {
      console.warn("Supabase order insert error:", orderError.message);
    }

    // 3. Insert items into order_items table
    if (items && Array.isArray(items) && items.length > 0) {
      const itemsRecords = items.map((item: any) => ({
        order_id: orderId,
        product_name: item.name,
        variant_name: item.variantName || "Standard",
        price: item.price,
        quantity: item.quantity || 1,
        image_url: item.image || "",
        created_at: new Date().toISOString(),
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(itemsRecords);

      if (itemsError) {
        console.warn("Supabase order_items insert error:", itemsError.message);
      }
    }

    return NextResponse.json({
      success: true,
      order: {
        id: orderId,
        orderNumber: generatedOrderNumber,
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        total,
        items,
        shippingAddress,
        paymentMethod,
        status: "Confirmed",
      },
    });
  } catch (err: any) {
    console.error("API POST /api/orders error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
