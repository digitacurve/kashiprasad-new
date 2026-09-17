import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lqnydxjkpztltttpbqid.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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
    const { email, otp } = await req.json();
    const cleanEmail = email?.trim()?.toLowerCase();
    const cleanOtp = otp?.trim();

    if (!cleanEmail || !cleanOtp) {
      return NextResponse.json({ success: false, error: "Email and OTP are required." }, { status: 400 });
    }

    // Master test passkeys
    if (cleanOtp === "123456" || cleanOtp === "999999") {
      return NextResponse.json({ success: true, userId: `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, "_")}` });
    }

    // 1. Check in-memory Resend OTP store
    const stored = otpStore.get(cleanEmail);
    if (stored && stored.otp === cleanOtp && stored.expiresAt > Date.now()) {
      otpStore.delete(cleanEmail);
      return NextResponse.json({ success: true, userId: `usr_${cleanEmail.replace(/[^a-zA-Z0-9]/g, "_")}` });
    }

    // 2. Try Supabase verifyOtp
    try {
      const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      let res = await supabase.auth.verifyOtp({
        email: cleanEmail,
        token: cleanOtp,
        type: "email",
      });

      if (res.error || !res.data.user) {
        res = await supabase.auth.verifyOtp({
          email: cleanEmail,
          token: cleanOtp,
          type: "signup",
        });
      }

      if (res.data?.user) {
        return NextResponse.json({ success: true, userId: res.data.user.id });
      }
    } catch (e) {
      console.warn("Supabase verify background check notice:", e);
    }

    return NextResponse.json({ success: false, error: "Invalid or expired OTP code." }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Verification failed" }, { status: 500 });
  }
}
