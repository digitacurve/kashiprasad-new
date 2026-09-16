import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: Request) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Check key credentials first (auth validation)
    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay API credentials are not configured" },
        { status: 401 }
      );
    }

    // Initialize Razorpay instance lazily after credentials are validated
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const body = await request.json();
    const { amount, currency, receipt } = body;

    // ERROR HANDLING: Validate amount >= 100 paise
    if (amount === undefined || amount === null) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    if (amount < 100) {
      return NextResponse.json(
        { error: "Amount must be at least 100 paise (1 INR)" },
        { status: 400 }
      );
    }

    // Call Razorpay API: POST https://api.razorpay.com/v1/orders
    const order = await razorpay.orders.create({
      amount: Math.round(amount),
      currency: currency || "INR",
      receipt: receipt || `receipt_${Date.now()}`,
    });

    // Return: { order_id, amount, currency }
    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: unknown) {
    const err = error as Error & { statusCode?: number };
    console.error("Error in create-order endpoint:", err);

    // Check if error is related to authentication
    if (err.statusCode === 401 || (err.message && err.message.includes("401"))) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid Razorpay API credentials" },
        { status: 401 }
      );
    }

    // Handle standard Razorpay API errors or network issues (return 500)
    return NextResponse.json(
      { error: err.message || "Failed to create Razorpay order" },
      { status: 500 }
    );
  }
}
