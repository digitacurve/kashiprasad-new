"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ShieldCheck, Sparkles, Mail, Lock, ArrowRight, CheckCircle2, User, Phone, RefreshCw, AlertCircle, Info, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { playLuxuryHaptic } from "@/lib/audio";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, requestOtp, verifyOtp, signInWithGoogle } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [devDemoOtp, setDevDemoOtp] = useState<string | null>(null);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const otpInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = "hidden";
      setStep("form");
      setError(null);
      setDevDemoOtp(null);
      setTimeout(() => {
        if (mode === "signup") {
          nameInputRef.current?.focus();
        } else {
          emailInputRef.current?.focus();
        }
      }, 80);
    } else {
      document.body.style.overflow = "";
      setEmail("");
      setName("");
      setPhone("");
      setOtp("");
      setError(null);
      setDevDemoOtp(null);
    }
  }, [isAuthModalOpen, mode]);

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
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes("@") || !cleanEmail.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (mode === "signup" && !name.trim()) {
      setError("Please enter your full name to create an account.");
      return;
    }

    if (mode === "signup" && phone.trim()) {
      const cleanPhone = phone.replace(/\D/g, "");
      if (cleanPhone.length !== 10) {
        setError("Please enter a valid 10-digit mobile number or leave it blank.");
        return;
      }
    }

    setLoading(true);
    setError(null);
    try {
      const res = await requestOtp(cleanEmail);
      if (res && res.error) {
        setError(res.error);
      } else {
        if (res && res.otp) {
          setDevDemoOtp(res.otp);
        }
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
    if (otp.length < 6) {
      setError("Please enter the verification code sent to your email.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const success = await verifyOtp(email, otp, name, phone);
      if (!success) {
        setError("Invalid OTP code. Please check your email inbox (and spam folder) and try again.");
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

      <div className="relative min-h-screen px-4 pt-10 pb-20 sm:px-6 flex justify-center items-center">
        {/* Luxury Dialog Box */}
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
                  {mode === "login" ? "Devotee Sign-in & Orders" : "New Devotee Registration"}
                </p>
              </div>
            </div>
            <button
              onClick={closeAuthModal}
              className="rounded-full p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-7">
            {step === "form" ? (
              <div className="space-y-5">
                {/* Mode Tab Switcher: Log In vs Sign Up */}
                <div className="grid grid-cols-2 p-1 rounded-2xl border border-amber-500/20 bg-zinc-950/80 backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setError(null);
                    }}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      mode === "login"
                        ? "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 shadow-[0_0_15px_rgba(223,171,82,0.35)] font-bold"
                        : "text-zinc-400 hover:text-amber-200"
                    }`}
                  >
                    <LogIn className="h-3.5 w-3.5" />
                    <span>Log In</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMode("signup");
                      setError(null);
                    }}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      mode === "signup"
                        ? "bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 shadow-[0_0_15px_rgba(223,171,82,0.35)] font-bold"
                        : "text-zinc-400 hover:text-amber-200"
                    }`}
                  >
                    <UserPlus className="h-3.5 w-3.5" />
                    <span>Sign Up</span>
                  </button>
                </div>

                {/* Form Heading */}
                <div>
                  <h4 className="font-serif text-2xl font-bold text-zinc-100">
                    {mode === "login" ? "Devotee Log In" : "Create Devotee Account"}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    {mode === "login"
                      ? "Enter your registered email to access your account and view consecrated orders."
                      : "Register with your name and email to track sacred shipments and manage your offerings."}
                  </p>
                </div>

                <form onSubmit={handleSendOtp} className="space-y-3.5">
                  {/* If Sign Up, Ask for Full Name */}
                  {mode === "signup" && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition shadow-inner">
                        <User className="h-4 w-4 text-amber-400 ml-3.5 shrink-0" />
                        <input
                          ref={nameInputRef}
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (error) setError(null);
                          }}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full bg-transparent px-3.5 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none tracking-wide"
                        />
                      </div>
                    </div>
                  )}

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition shadow-inner">
                      <Mail className="h-4 w-4 text-amber-400 ml-3.5 shrink-0" />
                      <input
                        ref={emailInputRef}
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="devotee@example.com"
                        className="w-full bg-transparent px-3.5 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none tracking-wide"
                      />
                    </div>
                  </div>

                  {/* If Sign Up, Optional Phone for delivery alerts */}
                  {mode === "signup" && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Mobile Number <span className="text-zinc-500 text-[10px] lowercase">(optional for updates)</span>
                      </label>
                      <div className="relative flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition shadow-inner">
                        <Phone className="h-4 w-4 text-amber-400 ml-3.5 shrink-0" />
                        <input
                          type="tel"
                          maxLength={10}
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value.replace(/\D/g, ""));
                            if (error) setError(null);
                          }}
                          placeholder="10-digit mobile number"
                          className="w-full bg-transparent px-3.5 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none tracking-wide"
                        />
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="flex items-center gap-1.5 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !email.includes("@")}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition font-mono cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending Email Code...</span>
                    ) : (
                      <>
                        <span>{mode === "login" ? "Send Login Code" : "Create Account & Send Code"}</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {/* Google Sign-in Alternative */}
                  <div className="relative flex items-center justify-center pt-2">
                    <div className="border-t border-zinc-800 w-full" />
                    <span className="bg-[#090c12] px-3 text-[11px] font-mono uppercase tracking-widest text-zinc-500 shrink-0">
                      OR
                    </span>
                    <div className="border-t border-zinc-800 w-full" />
                  </div>

                  <button
                    type="button"
                    onClick={() => signInWithGoogle()}
                    className="w-full flex items-center justify-center gap-2.5 rounded-2xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-xs font-medium text-zinc-200 hover:border-amber-400/60 hover:text-white transition cursor-pointer"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="#EA4335"
                        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.8z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.3 0 10.6 0 13s.6 4.7 1.6 6.6l3.7-2.9z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16C3.5 19.8 7.4 23 12 23z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  {/* Mode switcher link below */}
                  <div className="pt-2 text-center text-xs">
                    {mode === "login" ? (
                      <p className="text-zinc-400">
                        New devotee?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setMode("signup");
                            setError(null);
                          }}
                          className="text-amber-400 font-semibold hover:underline cursor-pointer ml-1"
                        >
                          Create an Account
                        </button>
                      </p>
                    ) : (
                      <p className="text-zinc-400">
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => {
                            setMode("login");
                            setError(null);
                          }}
                          className="text-amber-400 font-semibold hover:underline cursor-pointer ml-1"
                        >
                          Log In here
                        </button>
                      </p>
                    )}
                  </div>

                  {/* Trust and Privacy Note */}
                  <div className="pt-2 border-t border-zinc-800/80 text-center space-y-1">
                    <p className="text-[11px] text-zinc-500 leading-tight">
                      By continuing, you agree to Kashi Prasad's Terms of Use and Privacy Policy.
                    </p>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-amber-400/80 pt-1 font-mono">
                      <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                      <span>100% Free & Sanctified Access</span>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-2xl font-bold text-zinc-100">
                      {mode === "login" ? "Verify Log In" : "Verify Sign Up"}
                    </h4>
                    <button
                      type="button"
                      onClick={() => setStep("form")}
                      className="text-xs text-amber-400 hover:underline font-mono"
                    >
                      Change ({email})
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    Please enter the 6-digit code sent to <strong className="text-amber-200">{email}</strong>
                  </p>
                </div>

                <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-2.5 text-xs text-amber-200/90 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-300">
                    <Info className="h-3.5 w-3.5 shrink-0" />
                    <span>Check your Spam / Promotions folder</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Email may take 30-60s to arrive. For instant testing, you can use code{" "}
                    <button
                      type="button"
                      onClick={() => setOtp("123456")}
                      className="font-mono font-bold text-amber-300 underline cursor-pointer hover:text-amber-100"
                    >
                      123456
                    </button>
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                    Verification Code
                  </label>
                  <div className="relative flex items-center rounded-2xl border border-zinc-700 bg-zinc-900/90 focus-within:border-amber-400 transition shadow-inner">
                    <Lock className="h-4 w-4 text-amber-400 ml-3.5 shrink-0" />
                    <input
                      ref={otpInputRef}
                      type="text"
                      maxLength={8}
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value.replace(/\D/g, ""));
                        if (error) setError(null);
                      }}
                      placeholder="• • • • • •"
                      className="w-full bg-transparent px-3.5 py-3.5 text-lg font-mono tracking-[0.25em] text-center text-zinc-100 placeholder-zinc-600 focus:outline-none font-bold"
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
                  disabled={loading || otp.length < 6}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-[0_0_20px_rgba(223,171,82,0.3)] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition font-mono cursor-pointer"
                >
                  {loading ? (
                    <span>Verifying Code...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{mode === "login" ? "Verify & Log In" : "Verify & Complete Registration"}</span>
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
                        requestOtp(email);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:underline cursor-pointer"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      <span>Resend Email OTP</span>
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
