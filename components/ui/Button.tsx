import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline" | "pill";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-medium tracking-tight rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 disabled:opacity-50 disabled:pointer-events-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-green text-white font-medium shadow-md hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 border border-sky-400/25 hover:border-sky-400/50",
    ghost:
      "bg-transparent text-ink hover:text-green hover:bg-panel-2 border border-transparent",
    outline:
      "bg-transparent text-ink border border-line hover:border-green hover:text-green hover:bg-panel-2",
    pill:
      "border border-line text-soft hover:text-white hover:bg-green hover:border-green font-mono text-xs uppercase tracking-wider",
  }[variant];

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, sizeStyles, variantStyles, className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, sizeStyles, variantStyles, className)} {...props}>
      {content}
    </button>
  );
}
