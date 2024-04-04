"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { useInView } from "react-intersection-observer";

export const LampContainer = () => {
  type WrapperStyle = React.CSSProperties & {
    "--bottom": string;
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="lampcontainer z-40 flex rotate-270 opacity-65 pt-60">
      <div
        className={cn(
          { "scale-[3] md:scale-[2] 2xl:scale-[1.55]": inView },
          "lamp translate-z-0 translate-y-[-180px] rotate-180 scale-50 animate-none duration-1000"
        )}
        ref={ref}
        style={
          {
            "--bottom": "#ef4444",
          } as WrapperStyle
        }
      />
    </div>
  );
};
