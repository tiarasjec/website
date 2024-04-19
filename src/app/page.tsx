"use client";
import { HeroParallax } from "@/components/widgets/Hero";
import { useEffect, useState } from "react";
import { LabIntro } from "@/components/story/intro";
import { CyllinderStory } from "@/components/story/cylinder";
import { Last } from "@/components/story/last";
import Loading from "./loading";

export default function Home() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/hero")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false), 
        setImages(data);
      })

      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-0 md:gap-8 md:py-0">
        <HeroParallax images={images} />
        <LabIntro />
        {/* <CyllinderStory /> */}
        <Last />
    </main>
  );
}
