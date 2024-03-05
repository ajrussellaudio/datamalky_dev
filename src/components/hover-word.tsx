import { cn } from "@/lib/utils";
import { HTMLProps, forwardRef } from "react";

export const HoverWord = forwardRef<
  HTMLSpanElement,
  HTMLProps<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "select-none transition-all hover:text-yellow-500",
      className,
    )}
    {...props}
  />
));
HoverWord.displayName = "HoverWord";
