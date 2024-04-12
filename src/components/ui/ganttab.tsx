"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-24 w-fit flex items-center justify-center p-0">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-0 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-fit">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Inaugration
          </h3>
          <div className="text-base font-normal">
            <span className="text-slate-500 ">
            Tiara 2024 opening ceremony
            </span>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
