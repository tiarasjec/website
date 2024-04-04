"use client";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Lenis = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // document.documentElement.classList.add('[scrollbar-width:none]');
  }, []);

  useGSAP(() => {
    function update(time: any) {
      //@ts-ignore
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  });

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{
        // duration: 1.5,
        duration: 1.25,
        lerp: 0,
        easing: (x: number) => {
          return 1 - Math.pow(1 - x, 3);
        },
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
