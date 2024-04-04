import { cn } from "@/lib/utils";
import React from "react";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  variant?: "md" | "sm" | "xs";
}>;

export default function Container({
  children,
  className,
  variant = "md",
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        variant === "md" && "max-w-7xl",
        variant === "sm" && "max-w-5xl",
        variant === "xs" && "max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}
