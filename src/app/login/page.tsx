"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { QrCode, UserRound, Lock, Eye, EyeOff, Apple, Chrome, Facebook } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * TikTok‑style Login (Light mode, centered)
 * - Single, centered card on a white background
 * - Tabs for QR vs. Email/Username
 * - Minimal, production‑ready UI with Tailwind
 */
export default function Page() {
  const [tab, setTab] = useState<"qr" | "credentials">("credentials");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex items-center justify-center p-4 ">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md "
      >
        <div className="rounded-2xl border bg-white shadow-xl  border-red-200">
          {/* Header */}
          <div className="px-6 pt-6 pb-2">
            <h2 className="text-xl font-semibold">Log in</h2>
            <p className="mt-1 text-sm text-neutral-500">Continue to your account</p>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {tab === "credentials" ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push("/");
                }}
                className="grid gap-4"
              >
                <div>
                  <label className="mb-1 block text-sm font-medium">Email or username</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="name@example.com"
                      className="w-[350px] rounded-xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <label className="block text-sm font-medium">Password</label>
                    <Link href="#" className="text-xs text-neutral-500 hover:text-neutral-900">Forgot password?</Link>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      className="w-[350px] rounded-xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-900"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-neutral-500 hover:text-neutral-900"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 cursor-pointer" /> : <Eye className="h-4 w-4 cursor-pointer" />}
                    </button>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="cursor-pointer mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-neutral-900 px-4 text-sm font-medium text-white shadow hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                >
                  Log in
                </motion.button>
        

                <p className="text-[11px] leading-relaxed text-neutral-500">
                  By continuing, you agree to our <Link href="#" className="underline underline-offset-2 hover:text-neutral-900">Terms of Service</Link> and acknowledge our <Link href="#" className="underline underline-offset-2 hover:text-neutral-900">Privacy Policy</Link>.
                </p>
              </form>
            ) : (
              <div className="grid gap-5">
                <div className="rounded-xl border border-dashed border-neutral-300 p-6 text-center">
                  <div className="mx-auto mb-4 grid h-40 w-40 place-items-center rounded-lg bg-white shadow-inner">
                    {/* Decorative pseudo‑QR */}
                    <div className="grid grid-cols-5 gap-1 p-2">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={
                            "h-4 w-4 " +
                            ([0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 13, 16, 18, 19, 20, 21, 22, 23].includes(i)
                              ? "bg-neutral-900"
                              : "bg-neutral-200")
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-medium">Scan with the mobile app</p>
                  <p className="mt-1 text-xs text-neutral-500">Open the app → Profile → <span className="font-medium">Scan</span> → point at this code.</p>
                </div>

                <div className="text-[11px] leading-relaxed text-neutral-500">
                  Trouble scanning? Switch to <button onClick={() => setTab("credentials")} className="underline underline-offset-2 hover:text-neutral-900">email / username</button>.
                </div>
              </div>
            )}
          </div>

          {/* Footer inside card */}
          <div className="border-t border-neutral-200 px-6 py-4 text-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-neutral-600">Don&apos;t have an account?</span>
              <Link href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:opacity-80">Sign up</Link>
            </div>
          </div>
        </div>


      </motion.div>
    </div>
  );
}

function OAuthButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-50 active:scale-[0.99]"
    >
      {icon}
      {label}
    </button>
  );
}

function Separator({ label }: { label?: string }) {
  return (
    <div className="relative my-2">
      <div className="h-px w-full bg-neutral-200" />
      {label ? (
        <span className="absolute inset-0 -translate-y-1/2 top-1/2 mx-auto w-fit bg-white px-3 text-xs text-neutral-500">
          {label}
        </span>
      ) : null}
    </div>
  );
}

function AppBadge({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium hover:bg-neutral-50"
    >
      <span className="inline-block h-5 w-5 rounded bg-neutral-900" />
      <span>{label}</span>
    </button>
  );
}
