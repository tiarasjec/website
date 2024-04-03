import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/widgets/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tiara 2024",
  description: "National level techno-cultural fest, Tiara 2024 at SJEC Mangaluru", 
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
        <div className="flex min-h-screen w-full flex-col">
          {/* <Header /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
