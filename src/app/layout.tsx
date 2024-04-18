import "@/app/globals.css";
import { Header } from "@/components/widgets/Header";
import Footer from "@components/widgets/Footer";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import PrelineScript from "@/components/shared/preline";
import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from "@/components/shared/tailwind";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Tiara 2024",
    template: `%s - `,
  },
  description: "Tiara 2024 is a new way to experience the web.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", inter.variable)}
      >
        <SessionProvider>
          <TooltipProvider>
            <div className="flex min-h-screen w-full flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </TooltipProvider>
        </SessionProvider>
        <PrelineScript />
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  );
}
