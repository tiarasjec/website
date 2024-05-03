import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { tiaraFont } from "@/lib/fonts";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

export const EncryptButton = ({ targetText }: { targetText: string }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [text, setText] = useState(targetText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(targetText);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] px-4 py-2 font-mono font-medium  transition-colors bg-secondary text-tiara_red shadow hover:bg-secondary/80"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span className={cn("tracking-widest", tiaraFont.className)}>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-red-400/100 to-red-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};
