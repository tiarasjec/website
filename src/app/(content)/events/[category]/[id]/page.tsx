"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export interface Event {
  name: string;
  description: string;
  rules: string[];
  prerequisites: string[];
  general_rules: string[];
  thumbnail: string;
  startTime: string;
  endTime: string;
  costs: string;
  facultyCoordinators: FacultyCoordinator[];
  studentCoordinators: StudentCoordinator[];
}

export interface FacultyCoordinator {
  name: string;
  phone: string;
}

export interface StudentCoordinator {
  name: string;
  phone: string;
}

const Page = () => {
  const [eventInfo, setEventInfo] = useState<Event>();
  const pathname = usePathname();

  useEffect(() => {
    const [, , category, path] = pathname.split("/");
    console.log(category, path);
    fetch(`/api/events/${category}/${path}`)
      .then((response) => response.json())
      .then((dataList) => {
        setEventInfo(dataList);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [pathname]);
  return (
    <>
      {/* Hero */}
      <div className="max-w-[85rem] p-24 pt-36 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
            {eventInfo ? eventInfo?.name: ""}
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              {eventInfo ? eventInfo?.description: ""}
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Get started
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                href="#"
              >
                Contact sales team
              </a>
            </div>
            {/* End Buttons */}
          </div>
          {/* End Col */}
          <div className="relative ms-4">
            <Image
              className="w-full rounded-md"
              src={eventInfo?.thumbnail!}
              width={500}
              height={500}
              alt="Image Description"
            />

            {/* End SVG*/}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default Page;
