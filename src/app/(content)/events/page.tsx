"use client";
import { Text } from "@/components/shared/text";
import Timeline from "@/components/widgets/Timeline";
import React from "react";

export default function EventsPage() {
  return (
    <>
      <div className="flex">
        <div className="flex justify-center items-center mt-10 ">
          <Timeline />
        </div>
      </div>
    </>
  );
}
