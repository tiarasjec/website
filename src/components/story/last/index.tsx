"use client";

import * as Scrollytelling from "@bsmnt/scrollytelling";
import s from "./last.module.scss";
import { cn } from "@/lib/utils";
import { tiaraFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";

export const Last = () => {
  return (
    <Scrollytelling.Root start="top bottom" scrub={0.75}>
      <section className={s["section"]}>
        <div className="wrapper">
          <Scrollytelling.Waypoint
            at={50}
            tween={{
              target: ["body"],
              to: { color: "black" },
              duration: 0.35,
            }}
          />
          <Scrollytelling.Waypoint
            at={75}
            tween={{
              target: ["#smile-image", "#pc-image"],
              fromTo: [
                { opacity: 0, scale: 0.4 },
                { opacity: 1, scale: 1, ease: "elastic.out(1,0.5)" },
              ],
              duration: 1.2,
            }}
          />
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 100,
              fromTo: [
                {
                  scale: 0,
                },
                {
                  ease: "linear",
                  scale: 1,
                },
              ],
            }}
          >
            <h2
              className={cn(s["title"], "tracking-widest", tiaraFont.className)}
            >
              <Button className="">Register Now</Button>
            </h2>
          </Scrollytelling.Animation>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};
