import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="w-maxPage h-fit bg-blue-500 relative">
        <div className="w-1/3 h-80 absolute top-1/2 transform -translate-y-1/2">
          <Image
            src="/Categories/Mega.jpg"
            alt="Mega Category"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Page;
