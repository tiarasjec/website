import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div
      className={cn(
        "text-6xl md:text-9xl min-h-screen flex items-center justify-center animate-pulse",
        tiaraFont.className
      )}
    >
      <span className="">Ti</span>
      <span className="text-tiara_red">ar</span>a{" "}
      <span className="text-tiara_red">{"'"}</span>24{" "}
    </div>
  );
}
