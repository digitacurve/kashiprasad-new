import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lqnydxjkpztltttpbqid.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// In-memory OTP storage for instant verification fallback
interface OtpEntry {
  otp: string;
  expiresAt: number;
}
declare global {
  // eslint-disable-next-line no-var
  var __kashiOtpStore: Map<string, OtpEntry> | undefined;
}

const otpStore = global.__kashiOtpStore || (global.__kashiOtpStore = new Map<string, OtpEntry>());

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const cleanEmail = email?.trim()?.toLowerCase();

    if (!cleanEmail || !cleanEmail.includes("@")) {
      return NextResponse.json({ success: false, error: "Valid email address required." }, { status: 400 });
    }

    // 1. Generate a crisp 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(cleanEmail, {
      otp: generatedOtp,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
    });

    // 2. Also trigger Supabase signInWithOtp if configured
    try {
      if (SUPABASE_ANON_KEY) {
        const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        await supabase.auth.signInWithOtp({
          email: cleanEmail,
          options: { shouldCreateUser: true },
        });
      }
    } catch (e) {
      console.warn("Supabase signInWithOtp background notice:", e);
    }

    // 3. Directly send high-priority email via Resend HTTP API
    try {
      if (RESEND_API_KEY) {
        // Try official custom domain first
        let resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Kashi Prasad <orders@kashiprasad.in>",
            to: [cleanEmail],
            subject: "Your Kashi Prasad Verification Code",
            html: `
              <div style="font-family: Arial, sans-serif; background-color: #06080c; color: #f5f5f7; padding: 32px 20px; text-align: center; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #dfab5240;">
                <h2 style="font-family: Georgia, serif; color: #dfab52; margin-bottom: 8px; letter-spacing: 2px;">KASHI PRASAD</h2>
                <p style="font-size: 11px; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 0;">Devotee Verification</p>
                
                <p style="font-size: 14px; color: #d4d4d8; margin: 24px 0 12px;">Your one-time sacred verification code is:</p>
                
                <div style="background: #0f131a; border: 1px solid #dfab52; border-radius: 12px; padding: 16px 24px; display: inline-block; margin-bottom: 20px;">
                  <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #fbbf24; font-family: monospace;">${generatedOtp}</span>
                </div>
                
                <p style="font-size: 12px; color: #71717a; margin-bottom: 24px;">Enter this 6-digit code on the website to verify your account. This code expires in 10 minutes.</p>
                
                <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 11px; color: #71717a;">
                  <span>🕉️ Authentic Consecrated Offerings from Varanasi</span>
                </div>
              </div>
            `,
          }),
        });

        // If domain not fully verified yet, fallback to onboarding test domain
        if (!resendRes.ok) {
          resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Kashi Prasad <onboarding@resend.dev>",
              to: [cleanEmail],
              subject: "Your Kashi Prasad Verification Code",
              html: `
                <div style="font-family: Arial, sans-serif; background-color: #06080c; color: #f5f5f7; padding: 32px 20px; text-align: center; border-radius: 16px; max-width: 500px; margin: 0 auto; border: 1px solid #dfab5240;">
                  <h2 style="font-family: Georgia, serif; color: #dfab52; margin-bottom: 8px; letter-spacing: 2px;">KASHI PRASAD</h2>
                  <p style="font-size: 11px; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 0;">Devotee Verification</p>
                  
                  <p style="font-size: 14px; color: #d4d4d8; margin: 24px 0 12px;">Your one-time sacred verification code is:</p>
                  
                  <div style="background: #0f131a; border: 1px solid #dfab52; border-radius: 12px; padding: 16px 24px; display: inline-block; margin-bottom: 20px;">
                    <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #fbbf24; font-family: monospace;">${generatedOtp}</span>
                  </div>
                  
                  <p style="font-size: 12px; color: #71717a; margin-bottom: 24px;">Enter this 6-digit code on the website to verify your account. This code expires in 10 minutes.</p>
                  
                  <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 11px; color: #71717a;">
                    <span>🕉️ Authentic Consecrated Offerings from Varanasi</span>
                  </div>
                </div>
              `,
            }),
          });
        }

        const resendData = await resendRes.json();
        console.log("Direct Resend email status:", resendRes.status, resendData);
      }
    } catch (err) {
      console.error("Direct Resend dispatch error:", err);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("send-otp error:", error);
    return NextResponse.json({ success: false, error: error?.message || "Failed to send code" }, { status: 500 });
  }
}
