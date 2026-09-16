"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ShieldCheck, Sparkles, Phone, Lock, ArrowRight, CheckCircle2, User, RefreshCw, AlertCircle } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { playLuxuryHaptic } from "@/lib/audio";

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
      setTimeout(() => phoneInputRef.current?.focus(), 80);
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
        playLuxuryHaptic();
        setTimeout(() => otpInputRef.current?.focus(), 80);
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
      setError("Please enter the 6-digit verification code received on SMS.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const success = await verifyOtp(phone, otp, name);
      if (!success) {
        setError("Invalid OTP code. Please check your SMS and enter the correct 6-digit code.");
      } else {
        playLuxuryHaptic();
      }
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div
        onClick={closeAuthModal}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Invisible reCAPTCHA container for Google/Firebase Phone Auth */}
      <div id="recaptcha-container"></div>

      <div className="relative min-h-screen px-4 pt-12 pb-20 sm:px-6 flex justify-center items-center">
        {/* Flipkart / Amazon Style Clean Luxury Dialog */}
        <div className="relative w-full max-w-md transform rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#0f131a] via-[#090c12] to-[#05070a] shadow-2xl transition-all overflow-hidden">
          {/* Top Gold Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-80 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/15 to-transparent blur-3xl"
            aria-hidden="true"
          />

          {/* Header Strip */}
          <div className="relative flex items-center justify-between border-b border-amber-500/15 bg-[#080b10] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              </span>
              <div>
                <h3 className="font-serif text-sm font-bold tracking-wider text-amber-100">
                  KASHI PRASAD
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-widest text-amber-400/80">
                  Devotee Sign-in & Orders
                </p>
              </div>
            </div>
            <button
              onClick={closeAuthModal}
              className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer"
              aria-label="Close login modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-7">
            {step === "phone" ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-zinc-100">
                    Login or Sign up
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    Enter your mobile number to view past consecrated orders, saved delivery addresses, and track shipments.
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                    Mobile Number
                  </label>
                  <div className="relative flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition shadow-inner">
                    <div className="flex items-center gap-1.5 pl-3.5 pr-2.5 py-3 border-r border-zinc-700/80 text-xs font-mono font-bold text-amber-300">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
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
                      className="w-full bg-transparent px-3.5 py-3 text-sm font-mono text-zinc-100 placeholder-zinc-500 focus:outline-none tracking-wider"
                    />
                    <Phone className="h-4 w-4 text-zinc-500 mr-3.5 shrink-0" />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-1.5 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || phone.length !== 10}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition font-mono cursor-pointer"
                >
                  {loading ? (
                    <span>Sending SMS OTP...</span>
                  ) : (
                    <>
                      <span>Continue with OTP</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Trust and Privacy Note */}
                <div className="pt-2 border-t border-zinc-800/80 text-center space-y-1">
                  <p className="text-[11px] text-zinc-500 leading-tight">
                    By continuing, you agree to Kashi Prasad's Terms of Use and Privacy Policy.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-amber-400/80 pt-1 font-mono">
                    <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                    <span>100% Secure & Sanctified</span>
                  </div>
                </div>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-2xl font-bold text-zinc-100">
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
                    Please enter the 6-digit verification code sent to <strong className="text-amber-200 font-mono">+91 {phone}</strong>
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                    6-Digit SMS Code
                  </label>
                  <div className="relative flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition shadow-inner">
                    <Lock className="h-4 w-4 text-amber-400 ml-3.5 shrink-0" />
                    <input
                      ref={otpInputRef}
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value.replace(/\D/g, ""));
                        if (error) setError(null);
                      }}
                      placeholder="• • • • • •"
                      className="w-full bg-transparent px-3.5 py-3.5 text-lg font-mono tracking-[0.4em] text-center text-zinc-100 placeholder-zinc-600 focus:outline-none font-bold"
                    />
                  </div>
                </div>

                {/* Optional Name for Profile */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    Your Full Name (Optional)
                  </label>
                  <div className="relative flex items-center rounded-2xl border border-zinc-800 bg-zinc-900/60 focus-within:border-amber-400 transition">
                    <User className="h-4 w-4 text-zinc-500 ml-3.5 shrink-0" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-transparent px-3 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-1.5 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition font-mono cursor-pointer"
                >
                  {loading ? (
                    <span>Verifying Code...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Verify & Continue</span>
                    </>
                  )}
                </button>

                {/* Resend Timer */}
                <div className="text-center pt-1.5 border-t border-zinc-800/80">
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
                      <RefreshCw className="h-3.5 w-3.5" />
                      <span>Resend SMS OTP</span>
                    </button>
                  ) : (
                    <p className="text-xs text-zinc-500 font-mono">
                      Resend code in <span className="text-amber-300 font-bold">{timer}s</span>
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
