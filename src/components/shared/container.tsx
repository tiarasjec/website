import { cn } from "@/lib/utils";
import React from "react";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  variant?: "md" | "sm" | "xs" | "lg";
}>;

export default function Container({
  children,
  className,
  variant = "md",
}: Props) {
  return (
    <div
      className={cn(
        "px-4 sm:px-6 lg:px-8",
        variant === "lg" && "max-w-2xl",
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
