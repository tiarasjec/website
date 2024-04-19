"use client";

import * as Scrollytelling from "@bsmnt/scrollytelling";
import Image from "next/image";
import TV from "@/assets/tv.png";
import TICKET from "@/assets/ticket.png";

import s from "./last.module.scss";
import { cn } from "@/lib/utils";

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
          {/* <Image
            alt="PC"
            className={s["pc"]}
            src={TV}
            placeholder="blur"
            id="pc-image"
          />
          <Image
            alt="Smile"
            className={s["smile"]}
            src={TICKET}
            placeholder="blur"
            id="smile-image"
          /> */}
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
            <h2 className={cn(s["title"], "font-tiara tracking-widest")}>
              Ti<span className="text-tiara_red">ar</span>a registrations!{" "}
              <br />
              coming out soon!
            </h2>
          </Scrollytelling.Animation>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};
