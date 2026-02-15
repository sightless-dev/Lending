import * as React from "react";
import { cn } from "../../lib/cn";

type Props = React.ComponentPropsWithoutRef<"a"> & {
  variant?: "solid" | "ghost";
  size?: "sm" | "md";
};

export function Button({
  className,
  variant = "solid",
  size = "md",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[18px] font-bold transition will-change-transform focus:outline-none focus:ring-2 focus:ring-accent/30";
  const sizes = size === "sm" ? "px-5 py-2.5 text-[14px]" : "px-7 py-4 text-[16px]";
  const solid =
    "text-[#05110c] border border-accent/35 bg-gradient-to-b from-accent/95 to-accent2/90 shadow-glow hover:brightness-[1.03] hover:-translate-y-[1px] active:translate-y-0 active:scale-[.99]";
  const ghost =
    "text-white/90 border border-white/10 bg-white/[.04] shadow-deep hover:border-accent/25 hover:shadow-[0_22px_70px_rgba(0,0,0,.55),0_0_30px_rgba(25,247,176,.08)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[.99]";
  return (
    <a
      className={cn(base, sizes, variant === "solid" ? solid : ghost, className)}
      {...props}
    />
  );
}
