import React from "react";
import Timechart from "@/components/ui/timechart";

const Timeline = () => {
  return (
    <div className="w-full h-fit">
      <div className="flex justify-center">
        <div className="font-tiara text-7xl">
          <span className="text-tiara_red">T</span>iara{" "}
          <span className="text-tiara_red">{"'"}</span>24{" "}
        </div>
        <div className="ml-10 rounded-full w-fit p-4 h-fit bg-gray-400 space-x-10">
          <button className="rounded-full w-56 h-full pl-3 pr-3 bg-white text-black font-staat text-3xl">
            9th May
          </button>
          <button className="rounded-full w-56 h-full pl-3 pr-3 bg-white text-black font-staat text-3xl">
            10th May
          </button>
          <button className="rounded-full w-56 h-full pl-3 pr-3 bg-white text-black font-staat text-3xl">
            11th May
          </button>
        </div>
      </div>
      <div className="mt-3 h-fit w-full flex pt-3">
        <Timechart/>
      </div>
    </div>
  );
};

export default Timeline;
