import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type ShiftingCountdownProps = {
  targetDate: string;
};

const ShiftingCountdown = ({ targetDate }: ShiftingCountdownProps) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  });

  const handleCountdown = () => {
    const end = new Date(targetDate);
    end.setHours(end.getHours() + 9);
    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="p-4">
      {/* <div className="w-full max-w-5xl mx-auto flex items-center">
        <CountdownItem num={remaining.days} text="days" />
        <CountdownItem num={remaining.hours} text="hours" />
        <CountdownItem num={remaining.minutes} text="minutes" />
        <CountdownItem
          num={remaining.seconds}
          text="seconds"
          className="text-red-500"
        />
      </div> */}
    </div>
  );
};

const CountdownItem = ({
  num,
  text,
  className,
}: {
  num: number;
  text: string;
  className?: string;
}) => {
  return (
    <div className="font-mono w-1/4 h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center">
      <div className="w-full text-center relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className={cn(
              "block text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-white font-medium",
              tiaraFont.className,
              className
            )}
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className={cn(
          "tracking-widest text-xs md:text-sm lg:text-base font-light text-gray-300",
          tiaraFont.className
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default ShiftingCountdown;
