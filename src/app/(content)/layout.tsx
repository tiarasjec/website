import Glow from "@/components/shared/glow";
import { StarsCanvas } from "@/components/ui/Stars";
import Footer from "@/components/widgets/Footer";
import { Header } from "@/components/widgets/Header";
import React from "react";

function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StarsCanvas />
      <Glow />
      <div className="flex min-h-screen w-full flex-col">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default ContentLayout;
