"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface Event {
  name: string;
  description: string;
  rules: string[];
  prerequisites: string[];
  thumbnail: string;
  startTime: string;
  endTime: string;
  facultyCoordinators: {
    name: string;
    phone: string;
  }[];
  studentCoordinators: {
    name: string;
    phone: string;
  }[];
}

const Page = () => {
  const [category, setCategory] = useState("");
  const [eventInfo, setEventInfo] = useState<Event | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const parts = pathname.split("/");
    console.log(`/api/events/${parts[2]}/event/1`);
    fetch(`/api/events/${parts[2]}/event/${parts[4]}`)
      .then((response) => response.json())
      .then((data) => {
        setEventInfo(data);
        console.log(data);
        setEventInfo(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, [pathname]);

  useEffect(() => {
    console.log("EE: ", eventInfo?.name);
  }, [eventInfo]);
  const startTime = eventInfo?.startTime ? new Date(eventInfo.startTime) : null;
  const formattedDate = startTime ? startTime.getDate() : "";
  const formattedTime = startTime
    ? startTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <>
      <div className="w-maxPhone h-maxHeight sm:flex items-center overflow-auto">
        <div></div>
        <div className="sm:w-2/5 h-90% relative">
          <Image
            // src={eventInfo?.thumbnail || ""}
            src="/Categories/Mega.jpg"
            alt="Mega Category"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="mt-4 w-maxPhone  relative sm:w-2/3 lg:ml-3 h-90% sm:ml-1 sm:pl-5  lg:pl-10">
          <h1 className="font-staat text-5xl text-tiara_red">
            {eventInfo?.name}{" "}
            <Button className="absolute pr-5 w-32 h-8 mt-1.5 ml-5">
              <p className="tracking-widest text-sm font-tiara">register now</p>
            </Button>
          </h1>
          <span className="text-base text-white font-staat">
            {" "}
            {formattedDate} May - {formattedTime}
          </span>
          <p className="mt-4 text-md">{eventInfo?.description}</p>
          <h2 className="mt-5 text-tiara_red text-2xl">Prerequisites:</h2>
          <ul className="relative ml-5 w-4/5">
            {eventInfo?.prerequisites.map((pre, index) => (
              <li key={index}>
                <span className="text-tiara_red">•</span> {pre}
              </li>
            ))}
          </ul>
          <h2 className="mt-3 text-tiara_red text-2xl">Guidelines:</h2>
          <ul className="relative ml-5 w-4/5">
            {eventInfo?.rules.map((rule, index) => (
              <li key={index}>
                <span className="text-tiara_red">•</span> {rule}
              </li>
            ))}
          </ul>
          <div className="mt-8 w-full h-fit">
            <div className="sm:flex sm:flex-col sm:gap-y-2 lg:flex-row gap-x-6">
              <div className="mr-10">
                <h2 className="mt-3 text-tiara_red text-lg">
                  Faculty Co-ordinators:
                </h2>
                {eventInfo?.facultyCoordinators.map((coordinator, index) => (
                  <div key={index} className="flex flex-row gap-x-6 mt-2">
                    <p className="text-white">{coordinator.name}</p>
                    <p className="text-tiara_red">|</p>
                    <p className="text-white">{coordinator.phone}</p>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="mt-3 text-tiara_red text-lg ">
                  Student Co-ordinators:
                </h2>
                {eventInfo?.studentCoordinators.map((coordinator, index) => (
                  <div key={index} className="flex flex-row gap-x-6 mt-2">
                    <p className="text-white">{coordinator.name}</p>
                    <p className="text-tiara_red">|</p>
                    <p className="text-white">{coordinator.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
