"use client";
import { useEffect, useRef, useState } from "react";
import { HeroParallax } from "@/components/widgets/Hero";
import Lenis from "@/components/shared/Lenis";
import { Starfield } from "@/components/widgets/Starfield";
import { About } from "@/components/ui/about";

export default function Home() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-0 md:gap-8 md:py-0">
      <Lenis>
        <Starfield />

        <HeroParallax images={images} />
      </Lenis>
      <About />
    </main>
  );
}
