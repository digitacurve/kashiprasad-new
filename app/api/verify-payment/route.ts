import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // ERROR HANDLING: Missing fields: return 400
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        {
          error:
            "Missing required verification fields (razorpay_order_id, razorpay_payment_id, razorpay_signature)",
        },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return NextResponse.json(
        { error: "Razorpay API credentials not configured on server" },
        { status: 500 }
      );
    }

    // Algorithm: HMAC-SHA256(order_id + "|" + payment_id, KEY_SECRET)
    const generatedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    // Compare generated signature with razorpay_signature
    if (generatedSignature === razorpay_signature) {
      return NextResponse.json({
        success: true,
        message: "Payment signature verified successfully.",
      });
    } else {
      // Signature mismatch: return 400, do NOT mark as paid
      return NextResponse.json(
        { success: false, error: "Payment verification failed: signature mismatch." },
        { status: 400 }
      );
    }
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Error in verify-payment endpoint:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error during verification" },
      { status: 500 }
    );
  }
}
