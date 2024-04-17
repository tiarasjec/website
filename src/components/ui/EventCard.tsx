import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundGradient } from "./background-gradient";

interface EventCardProps {
  title: string;
  description: string;
}

export const EventCard: React.FC<EventCardProps> = ({ title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="transition-opacity"
    >
      <BackgroundGradient className="rounded-[22px] w-[400px] h-[450px] p-4 sm:p-10 bg-zinc-900 cursor-pointer relative overflow-hidden transition-transform">
        <div
          className={cn(
            "absolute inset-0 bg-center bg-cover opacity-50 w-full",
            hovered ? "blur-none scale-110" : "blur-sm grayscale"
          )}
          style={{
            backgroundImage: `url('/Categories/Mega.jpg')`,
            transition: "all 0.2s ease-in-out",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center backdrop-filter bg-opacity-50"></div>
      </BackgroundGradient>
    </div>
  );
};
