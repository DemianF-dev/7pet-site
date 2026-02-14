import type { ButtonHTMLAttributes, ReactNode } from "react"

import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger"
type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-500",
  secondary:
    "bg-slate-700 text-white hover:bg-slate-800 focus-visible:ring-slate-500",
  outline:
    "border border-slate-300 text-slate-800 hover:bg-slate-100 focus-visible:ring-slate-400",
  ghost: "text-slate-800 hover:bg-slate-100 focus-visible:ring-slate-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </button>
  )
}
