import { cn } from "@/lib/utils";
import { HTMLProps, forwardRef } from "react";

export const DefinitionList = forwardRef<
  HTMLDListElement,
  HTMLProps<HTMLDListElement>
>(({ className, ...props }, ref) => (
  <dl
    ref={ref}
    className={cn("font-serif max-w-2xl tracking-wide", className)}
    {...props}
  />
));
DefinitionList.displayName = "DefinitionList";

export const DefinitionTitle = forwardRef<
  HTMLLIElement,
  HTMLProps<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <dt ref={ref} className={cn("text-xl mt-2", className)} {...props} />
));
DefinitionTitle.displayName = "DefinitionTitle";

export const DefinitionDetails = forwardRef<
  HTMLLIElement,
  HTMLProps<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <dd ref={ref} className={cn("ml-4 list-item", className)} {...props} />
));
DefinitionDetails.displayName = "DefinitionDetails";
