"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";
import { EncryptButton } from "@components/ui/hover/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
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
    endTime: string;
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
    const { data: session } = useSession();

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
    const formattedDate = startTime ? startTime.getDate() : "";
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
                <div className="w-full mt-32 px-5">
                    <div className="w-full h-full lg:grid  grid-cols-2  sm:flex flex-col">
                        <div className="">
                            <div className="w-full">
                                <h1 className="text-3xl mt-3 font-bold text-center">{eventInfo?.name}</h1>
                                <p className=" mt-4 text-xl text-center">{eventInfo?.description}</p>
                            </div>
                            {/* <div className="bg-white rounded-xl flex w-3/6 h-10 text-black text-2xl justify-center items-center mt-4 font-tiara ml-4">
                                <span className="">
                                    {formattedDate.toString().toLowerCase()}th may -{" "}
                                    {formattedTime.toString().toLowerCase()}
                                </span>
                            </div> */}
                            <div className="w-full mt-5">
                                {eventInfo && eventInfo.prerequisites.length === 0 ? (
                                    ""
                                ) : (
                                    <>
                                        <h1 className="text-2xl font-bold text-tiara_red ml-4">Prerequisites</h1>
                                        <ul className="mt-4 ml-5">
                                            {eventInfo?.prerequisites.map((prerequisite, index) => (
                                                <li className="text-lg list-disc marker:text-tiara_red" key={index}>
                                                    {prerequisite}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                            <div className="w-full mt-5">
                                <h1 className="text-2xl font-bold text-tiara_red ml-4">Rules</h1>
                                <ul className="mt-4 ml-5">
                                    {eventInfo?.rules.map((rules, index) => (
                                        <li className="text-lg list-disc marker:text-tiara_red" key={index}>
                                            {rules}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full mt-5">
                                <h1 className="text-2xl font-bold text-tiara_red ml-4">Event Coordinators</h1>
                                <ul className="mt-4 ml-5">
                                    {eventInfo?.studentCoordinators.map((studentCoordinators, index) => (
                                        <li className="text-lg list-disc marker:text-tiara_red" key={index}>
                                            {studentCoordinators.name} {" | "} {studentCoordinators.phone}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className=" flex justify-center items-start">
                            <div>
                                {/* <h1 className="text-3xl font-bold text-white">{eventInfo?.name}</h1> */}
                                <Image
                                    src={eventInfo?.thumbnail || ""}
                                    width={400}
                                    height={400}
                                    alt="image"
                                    className=" rounded-lg shadow-lg shadow-slate-500/50 mt-16"
                                />
                                <div
                                    className={cn(
                                        "tracking-widest  font-medium mt-8 text-center text-xl ",
                                        tiaraFont.className
                                    )}
                                >
                                    <span>
                                        {" "}
                                            cost ₹<span className="text-tiara_red">{eventInfo?.costs}</span><span>/{eventInfo?.team ? "team" : "person"}</span>{" "}
                                    </span>
                                </div>
                                <div className="mt-8 text-center">
                                    {session && session.user ? (
                                        <Link href="/register">
                                            <EncryptButton targetText="Register" />
                                        </Link>
                                    ) : (
                                        <div
                                            onClick={async () =>
                                                await signIn("google", {
                                                    callbackUrl: "/register",
                                                    redirect: true,
                                                })
                                            }
                                        >
                                            <EncryptButton targetText="Register Now" />
                                        </div>
                                    )}
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
