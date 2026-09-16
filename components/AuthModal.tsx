"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ShieldCheck, Sparkles, Phone, Lock, ArrowRight, CheckCircle2, User, RefreshCw, MessageSquare } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { isFirebaseConfigured } from "@/lib/firebase";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, requestOtp, verifyOtp } = useAuth();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const otpInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = "hidden";
      setStep("phone");
      setError(null);
      setTimeout(() => phoneInputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setPhone("");
      setOtp("");
      setName("");
      setError(null);
    }
  }, [isAuthModalOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "otp" && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  if (!isAuthModalOpen) return null;

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await requestOtp(cleanPhone);
      if (res && res.error) {
        setError(res.error);
      } else {
        setStep("otp");
        setTimer(30);
        setCanResend(false);
        setTimeout(() => otpInputRef.current?.focus(), 50);
      }
    } catch {
      setError("Failed to send OTP. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const success = await verifyOtp(phone, otp, name);
      if (!success) {
        setError(
          isFirebaseConfigured
            ? "Incorrect SMS OTP. Please check the code received on your phone."
            : "Invalid OTP. Use demo code: 123456"
        );
      }
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeAuthModal}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="relative min-h-screen px-4 pt-16 pb-20 sm:px-6 flex justify-center items-center">
        <div className="relative w-full max-w-md transform rounded-2xl border border-amber-500/30 bg-[#090c12] shadow-2xl transition-all overflow-hidden">
          {/* Top Gold Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-80 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/15 to-transparent blur-3xl"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-amber-500/15 bg-[#0b0e15] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              </span>
              <div>
                <h3 className="font-serif text-sm font-bold tracking-wide text-amber-100">
                  KASHI PRASAD
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80">
                  Sacred Devotee Sign-in
                </p>
              </div>
            </div>
            <button
              onClick={closeAuthModal}
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer"
              aria-label="Close login modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {step === "phone" ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <h4 className="font-serif text-xl font-bold text-zinc-100">
                    Login or Sign up
                  </h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Get access to your sacred orders, save delivery addresses for 1-tap checkout, and sanctification certificates.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-mono text-zinc-300 block">
                    Mobile Phone Number
                  </label>
                  <div className="relative flex items-center rounded-xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition">
                    <span className="pl-3.5 pr-2 text-xs font-mono font-bold text-amber-300 border-r border-zinc-700">
                      +91
                    </span>
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, ""));
                        if (error) setError(null);
                      }}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full bg-transparent px-3 py-3 text-sm font-mono text-zinc-100 placeholder-zinc-500 focus:outline-none"
                    />
                    <Phone className="h-4 w-4 text-zinc-500 mr-3.5 shrink-0" />
                  </div>
                </div>

                {error && <p className="text-xs text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={loading || phone.length !== 10}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition font-mono cursor-pointer"
                >
                  {loading ? (
                    <span>Sending Code...</span>
                  ) : (
                    <>
                      <span>Continue with OTP</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Trust Pillar */}
                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                  <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                  <span>100% Secure & Privacy Protected</span>
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-xl font-bold text-zinc-100">
                      Verify OTP
                    </h4>
                    <button
                      type="button"
                      onClick={() => setStep("phone")}
                      className="text-xs text-amber-400 hover:underline font-mono"
                    >
                      Change (+91 {phone})
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Enter the 6-digit code sent via SMS to <strong className="text-zinc-200 font-mono">+91 {phone}</strong>
                  </p>
                </div>

                {/* Demo OTP Helper Tag (Only shown if Firebase is not active) */}
                {!isFirebaseConfigured && (
                  <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs text-amber-200 flex items-center justify-between">
                    <span className="font-mono text-[11px]">✦ Demo Verification Code:</span>
                    <span className="font-mono font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                      123456
                    </span>
                  </div>
                )}

                {/* Invisible reCAPTCHA container */}
                <div id="recaptcha-container"></div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300 block">
                    6-Digit Verification Code
                  </label>
                  <div className="relative flex items-center rounded-xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition">
                    <Lock className="h-4 w-4 text-zinc-500 ml-3.5 shrink-0" />
                    <input
                      ref={otpInputRef}
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value.replace(/\D/g, ""));
                        if (error) setError(null);
                      }}
                      placeholder="Enter 6-digit OTP"
                      className="w-full bg-transparent px-3 py-3 text-base font-mono tracking-widest text-zinc-100 placeholder-zinc-500 focus:outline-none text-center"
                    />
                  </div>
                </div>

                {/* Optional Name for Profile */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300 block">
                    Your Name (Optional)
                  </label>
                  <div className="relative flex items-center rounded-xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition">
                    <User className="h-4 w-4 text-zinc-500 ml-3.5 shrink-0" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vivek Singh"
                      className="w-full bg-transparent px-3 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none"
                    />
                  </div>
                </div>

                {error && <p className="text-xs text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition font-mono cursor-pointer"
                >
                  {loading ? (
                    <span>Verifying...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Verify & Continue</span>
                    </>
                  )}
                </button>

                {/* Resend Timer */}
                <div className="text-center pt-1">
                  {canResend ? (
                    <button
                      type="button"
                      onClick={() => {
                        setTimer(30);
                        setCanResend(false);
                        requestOtp(phone);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:underline cursor-pointer"
                    >
                      <RefreshCw className="h-3 w-3" />
                      <span>Resend OTP</span>
                    </button>
                  ) : (
                    <p className="text-xs text-zinc-500 font-mono">
                      Resend code in <span className="text-zinc-300 font-bold">{timer}s</span>
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
