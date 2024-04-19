import "@/app/globals.css";
import { Header } from "@/components/widgets/Header";
import Footer from "@components/widgets/Footer";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import PrelineScript from "@/components/shared/preline";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { TailwindIndicator } from "@/components/shared/tailwind";
import Lenis from "@/components/shared/lenis";
import { StarsCanvas } from "@/components/ui/Stars";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Tiara 2024",
    template: `%s - `,
  },
  description:
    "Tiara is a National-level Techno-Cultural fest, conducted for young minds aspiring to be extraordinary, that is open to all students of undergraduate level and above to come and showcase their talents and represent their respective institutions on the grand stage of Tiara.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={cn("bg-background font-sans antialiased", inter.variable)}
        >
          <SessionProvider>
            <Lenis>
              <StarsCanvas />
              <div className="flex min-h-screen w-full flex-col">
                <Header />
                {children}
              </div>
            </Lenis>
          </SessionProvider>
          <PrelineScript />
          <Toaster />
          <TailwindIndicator />
          <Analytics />
          <SpeedInsights />
          <Footer />
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v2/checkout.js" />
    </>
  );
}
