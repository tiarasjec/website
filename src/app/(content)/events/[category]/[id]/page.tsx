"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
import { EncryptButton } from "@components/ui/hover/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { tiaraFont } from "@/lib/fonts";

export interface Event {
    name: string;
    team: string;
    description: string;
    costs: number;
    rules: string[];
    prerequisites: string[];
    general_rules: string[];
    thumbnail: string;
    startTime: string;
    endTime: string | undefined;
    // costs: string;
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
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const [, , category, path] = pathname.split("/");
        fetch(`/api/events/${category}/${path}`)
            .then((response) => response.json())
            .then((dataList) => {
                setEventInfo(dataList);
                setLoading(false);
            })
            .catch((error) => console.error("Error fetching events:", error));
    }, [pathname]);
    const startTime = eventInfo?.startTime ? new Date(eventInfo.startTime) : null;
    const endTime = eventInfo?.endTime ? new Date(eventInfo.endTime) : null;
    const formattedStartDate = startTime ? startTime.getDate() : "";
    const formatedEndDate = endTime ? endTime.getDate() : "";
    const formattedTime = startTime
        ? startTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
          })
        : "";
    const eventName = eventInfo?.name;
    const parts = eventName?.split(/\(([^)]+)\)/);
    return (
        <>
            {/* Hero */}
            {loading ? (
                <Loading />
            ) : (
                <div className="container w-full mt-32 px-5 mx-auto">
                    <div className="w-full h-full lg:grid  grid-cols-2  sm:flex flex-col mx-auto">
                        <div className="mx-auto">
                            <div className="w-full mt-5 2xl:w-11/12 mx-auto ">
                                <h1 className="text-4xl font-bold ml-4 2xl:text-6xl ">{eventInfo?.name}</h1>
                                <p className="mt-4 ml-4 text-2xl 2xl:text-4xl">{eventInfo?.description}</p>
                            </div>

                            <div
                                className={`  ${
                                    formatedEndDate == "" ? "w-4/6" : "w-5/6"
                                }  h-16 bg-white rounded-xl flex lg:text-5xl text-black  justify-center items-center mt-6 font-tiara ml-4 mx-auto`}
                            >
                                <span
                                    className={cn(
                                        "tracking-widest  font-medium text-center text-xl lg:text-2xl ",
                                        tiaraFont.className
                                    )}
                                >
                                    {formattedStartDate.toString().toLowerCase()}
                                    {formatedEndDate ? (
                                        <span
                                            className={cn(
                                                "tracking-widest  font-medium text-center text-xl lg:text-2xl ",
                                                tiaraFont.className
                                            )}
                                        >
                                            th may to{" "}
                                        </span>
                                    ) : (
                                        ""
                                    )}
                                    {""}
                                    {formatedEndDate.toString().toLowerCase()}th may{" "}
                                    {formattedTime.toString().toLowerCase()}
                                </span>
                            </div>
                            <div className="w-full mt-10  2xl:w-11/12 mx-auto ">
                                {eventInfo && eventInfo.prerequisites.length === 0 ? (
                                    ""
                                ) : (
                                    <>
                                        <h1 className="text-2xl font-bold text-tiara_red ml-4 2xl:text-4xl">
                                            Prerequisites
                                        </h1>
                                        <ul className="mt-4 ml-5">
                                            {eventInfo?.prerequisites.map((prerequisite, index) => (
                                                <li
                                                    className="text-lg list-disc marker:text-tiara_red 2xl:text-2xl"
                                                    key={index}
                                                >
                                                    {prerequisite}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                            <div className="w-full mt-5 2xl:w-11/12 mx-auto ">
                                <h1 className="text-2xl font-bold text-tiara_red ml-4 2xl:text-4xl">Rules</h1>
                                <ul className="mt-4 ml-5">
                                    {eventInfo?.rules.map((rules, index) => (
                                        <li
                                            className="text-lg list-disc marker:text-tiara_red 2xl:text-2xl"
                                            key={index}
                                        >
                                            {rules}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full mt-5  2xl:w-11/12 mx-auto">
                                <h1 className="text-2xl font-bold text-tiara_red ml-4 2xl:text-4xl">
                                    Event Coordinators
                                </h1>
                                <ul className="mt-4 ml-5">
                                    {eventInfo?.studentCoordinators.map((studentCoordinators, index) => (
                                        <li
                                            className="text-lg list-disc marker:text-tiara_red 2xl:text-2xl"
                                            key={index}
                                        >
                                            {studentCoordinators.name} {" | "}{" "}
                                            <a className="" href={`tel:+91${studentCoordinators.phone}`}>
                                                {studentCoordinators.phone}
                                            </a>{" "}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className=" flex justify-center items-start p-10">
                            <div>
                                {/* <h1 className="text-3xl font-bold text-white">{eventInfo?.name}</h1> */}
                                <Image
                                    src={eventInfo?.thumbnail || ""}
                                    width={400}
                                    height={400}
                                    alt="image"
                                    className=" rounded-lg shadow-lg shadow-slate-500/50 mt-16 2xl:w-[620px] 2xl:h-[620px]"
                                />
                                <div
                                    className={cn(
                                        "tracking-widest  font-medium mt-8 text-center text-xl p-10",
                                        tiaraFont.className
                                    )}
                                >
                                    <span className="2xl:text-4xl">
                                        {" "}
                                        cost ₹<span className="text-tiara_red">{eventInfo?.costs}</span>
                                        <span>/{eventInfo?.team ? "team" : "person"}</span>{" "}
                                    </span>
                                </div>
                                <div className="text-center 2xl:text-2xl">
                                    <Link href="/register">
                                        <EncryptButton targetText="register now" />
                                    </Link>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )}
            {/* End Hero */}
        </>
    );
};

export default Page;
