import React from "react";
import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 px-6">
      <div className="max-w-md w-full text-center space-y-6 bg-panel border border-line rounded-3xl p-8 sm:p-10 shadow-subtle">
        <div className="w-14 h-14 rounded-2xl bg-green/10 text-green flex items-center justify-center mx-auto border border-green/20">
          <Zap className="w-7 h-7" />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-amber font-semibold block">
          404 — Routing Exception
        </span>

        <h2 className="font-heading text-3xl font-bold text-ink">
          Page Not Located
        </h2>

        <p className="text-sm text-soft leading-relaxed">
          The requested power system route does not exist or has been restructured within our operating platform.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green text-white font-heading text-xs font-semibold uppercase tracking-wider hover:shadow-glow transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
