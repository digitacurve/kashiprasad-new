"use client";

// Shared AudioContext instance for optimal browser performance
let audioCtx: AudioContext | null = null;
let lastSoundTime = 0;

/**
 * Ultra-minimal, refined luxury acoustic micro-haptic sound.
 * Designed to feel like a subtle, premium tactile feedback (similar to high-end luxury interfaces)
 * without being loud, intrusive, or fatiguing.
 */
export function playLuxuryHaptic() {
  if (typeof window === "undefined") return;

  const now = Date.now();
  // Prevent auditory congestion during rapid cursor sweeps across cards
  if (now - lastSoundTime < 140) return;
  lastSoundTime = now;

  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioCtx || audioCtx.state === "closed") {
      audioCtx = new AudioCtx();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }

    const t = audioCtx.currentTime;

    // Soft warm resonance tone
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = "sine";
    // Warm harmonic micro-frequency
    osc.frequency.setValueAtTime(659.25, t); // E5
    osc.frequency.exponentialRampToValueAtTime(783.99, t + 0.035); // G5 gentle micro-lift

    // Low-pass filter to remove any harsh treble edge
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1600, t);

    // Ultra-soft micro envelope (50ms subtle tick)
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.016, t + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.055);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(t);
    osc.stop(t + 0.06);

    // Mobile device hardware micro-vibration tactile feedback
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      try {
        navigator.vibrate(10);
      } catch {
        // Safe ignore
      }
    }
  } catch {
    // Graceful fallback
  }
}
