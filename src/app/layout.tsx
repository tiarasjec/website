import "@/app/globals.css";
import PrelineScript from "@/components/shared/preline";
import { TailwindIndicator } from "@/components/shared/tailwind";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import Script from "next/script";

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
          <SessionProvider>{children}</SessionProvider>
          <PrelineScript />
          <Toaster />
          <TailwindIndicator />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v2/checkout.js" />
    </>
  );
}
