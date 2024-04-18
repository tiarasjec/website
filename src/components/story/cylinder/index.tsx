"use client";

import { gsap } from "gsap";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import Image, { StaticImageData } from "next/image";

import s from "./cyllinder.module.scss";
import clsx from "clsx";
import { useMapToCylinder } from "./helpers";
import Link from "next/link";
import { useViewportSize } from "@/hooks/useViewport";

import technical from "@/assets/technical.png";
import nontechnical from "@/assets/nontechnical.png";
import cultural from "@/assets/cultural.png";
import mega from "@/assets/mega.png";

import { useState, useEffect } from 'react';

interface Event {
  title: string;
  href: string;
  og: StaticImageData;
}

const events: Event[] = [
  {
    title: "Technical",
    href: "/events/technical",
    og: technical,
  },
  {
    title: "Non Technical",
    href: "/events/non-technical",
    og: nontechnical,
  },
  {
    title: "Cultural",
    href: "/events/cultural",
    og: cultural,
  },
  {
    title: "Mega",
    href: "/events/mega",
    og: mega,
  },
];

const progress = { value: 0 };

const itemHeight = "7vh";
const itemsInViewAtOnce = 7;
const itemsPadding = 4;

export const CyllinderStory = () => {
  const { height } = useViewportSize();
  const pinSpacerHeight = `calc(3 * ${itemHeight} * ${
    Math.max(itemsInViewAtOnce, events.length) + itemsPadding
  })`;

  const update = useMapToCylinder({
    target: "[data-event]",
    onUpdate: (
      element: gsap.TweenTarget,
      { y, z, rotationX, opacity, data }: any
    ) => {
      gsap.set(element, {
        rotateX: rotationX,
        opacity: data.progress === 0 ? opacity : 1,
        y: y,
        z: z,
        attr: { ["data-state"]: data.progress != 0 ? "active" : "disabled" },
      });
    },
    config: {
      cylinderRadius: height / 3.6,
      availableRadians: (Math.PI / 7) * events.length,
    },
  });

  return (
    <Scrollytelling.Root
      scrub={0.75}
      callbacks={{
        onRefresh: () => update(progress.value),
      }}
    >
      <div
        className={s["section"]}
        style={{
          height: pinSpacerHeight,
        }}
      >
        <div className={s["pin"]}>
          <div className={s["cyllinder"]}>
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 100,
                target: progress,
                to: {
                  value: 1,
                  onUpdate: () => update(progress.value),
                },
              }}
            />

            {events.map((event, i) => {
              return (
                <div className={s["item"]} data-event={i} key={i}>
                  <h2 className={s["title"]}>{event.title}</h2>
                  <div className={s["info"]}>
                    <Link
                      className={s["link"]}
                      href={event.href}
                      target="_blank"
                      rel="noopener"
                    >
                      {event.og && (
                        <Image
                          draggable={false}
                          className={clsx("image", s["image"])}
                          src={event.og.src}
                          width={760}
                          height={496}
                          quality={100}
                          alt={"dummy image"}
                        />
                      )}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Scrollytelling.Root>
  );
};
