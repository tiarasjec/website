"use client";
import Lenis from "@/components/shared/lenis";
import { HeroParallax } from "@/components/widgets/Hero";
import { StarsCanvas } from "@/components/ui/Stars";
import { useEffect, useState } from "react";
import { LabIntro } from "@/components/story/intro";
import { CyllinderStory } from "@/components/story/cylinder";
import { Last } from "@/components/story/last";

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
        <StarsCanvas />
        <HeroParallax images={images} />
        <LabIntro />
        <CyllinderStory />
        <Last />
      </Lenis>
    </main>
  );
}
