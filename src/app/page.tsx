"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { Header } from "@/components/widgets/Header";
import { HeroParallax } from "@/components/widgets/Hero";
import Lenis from "@/components/shared/Lenis";
import { Starfield } from "@/components/widgets/Starfield";
import { About } from "@/components/ui/about";
import ShiftingCountdown from "@/components/widgets/Countdown";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const initialMaskSize = 0.8;
const targetMaskSize = 30;
const easing = 0.15;
let easedScrollProgress = 0;

export default function Home() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([]);
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(); // Ref to store the animation frame ID

  useEffect(() => {
    fetch("/api/gallery")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));

    const animate = () => {
      if (stickyMask.current && container.current) {
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        stickyMask.current.style.maskSize =
          (initialMaskSize + maskSizeProgress) * 100 + "%";
      }
      animationRef.current = requestAnimationFrame(animate); // Update animationRef with the new animation frame ID
    };

    const getScrollProgress = () => {
      if (stickyMask.current && container.current) {
        const scrollProgress =
          stickyMask.current.offsetTop /
          (container.current.getBoundingClientRect().height -
            window.innerHeight);
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress;
      }
      return 0;
    };

    animationRef.current = requestAnimationFrame(animate); // Start the animation loop

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current); // Cancel the animation frame when component unmounts
      }
    };
  }, []);

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-0 md:gap-8 md:py-0">
      <Lenis>
        <Starfield />

        {/* <div ref={container} className={styles.container}>
          <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4" />
          </video>
          </div>
        </div> */}

        <Header />
        <HeroParallax images={images} />
      </Lenis>
      <About />
    </main>
  );
}
