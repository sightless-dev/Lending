import * as React from "react";
import { cn } from "../../lib/cn";

type Props = React.ComponentPropsWithoutRef<"div">;

/**
 * Glass Card (premium but clean):
 * - single surface, no heavy outer gradient frame
 * - equal-height friendly
 * - subtle hover glow
 */
export function Card({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "h-full rounded-xl2 border border-white/10 bg-gradient-to-b from-white/[.06] to-white/[.03] shadow-deep",
        "transition will-change-transform",
        "hover:-translate-y-[2px] hover:border-accent/20 hover:shadow-[0_28px_90px_rgba(0,0,0,.55),0_0_36px_rgba(25,247,176,.10)]",
        className
      )}
      {...props}
    />
  );
}
