"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase keys are provided in environment
export const isFirebaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);

// Initialize Firebase safely on client
const app =
  getApps().length > 0
    ? getApp()
    : isFirebaseConfigured
    ? initializeApp(firebaseConfig)
    : null;

export const auth = app ? getAuth(app) : null;

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: ConfirmationResult;
  }
}

/**
 * Initializes Invisible reCAPTCHA on the given HTML element container ID
 */
export function initRecaptcha(containerId: string = "recaptcha-container") {
  if (typeof window === "undefined" || !auth) return null;

  try {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
    }

    window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: "invisible",
      callback: () => {
        // reCAPTCHA solved
      },
      "expired-callback": () => {
        console.warn("reCAPTCHA expired, resetting");
      },
    });

    return window.recaptchaVerifier;
  } catch (err) {
    console.error("Failed to initialize reCAPTCHA:", err);
    return null;
  }
}

/**
 * Sends real SMS OTP to Indian mobile numbers (+91)
 */
export async function sendFirebaseOtp(
  phone10Digit: string,
  containerId: string = "recaptcha-container"
): Promise<{ success: boolean; confirmationResult?: ConfirmationResult; error?: string }> {
  if (!auth) {
    return {
      success: false,
      error: "Firebase Auth is not configured. Please add Firebase keys to .env.local",
    };
  }

  try {
    const formattedPhone = `+91${phone10Digit.replace(/\D/g, "")}`;
    const verifier = initRecaptcha(containerId);

    if (!verifier) {
      throw new Error("Unable to create reCAPTCHA verifier");
    }

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      formattedPhone,
      verifier
    );
    window.confirmationResult = confirmationResult;

    return { success: true, confirmationResult };
  } catch (err: any) {
    console.error("Firebase send OTP error:", err);
    return {
      success: false,
      error: err.message || "Failed to send SMS OTP",
    };
  }
}

/**
 * Verifies the 6-digit OTP received via SMS
 */
export async function verifyFirebaseOtp(
  code: string,
  customConfirmation?: ConfirmationResult
): Promise<{ success: boolean; user?: any; error?: string }> {
  const confirmation = customConfirmation || (typeof window !== "undefined" ? window.confirmationResult : null);

  if (!confirmation) {
    return {
      success: false,
      error: "No active verification session. Please request OTP again.",
    };
  }

  try {
    const result = await confirmation.confirm(code);
    return { success: true, user: result.user };
  } catch (err: any) {
    console.error("Firebase OTP confirmation error:", err);
    return {
      success: false,
      error: err.message || "Invalid or expired OTP code",
    };
  }
}
