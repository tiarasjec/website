import "@/app/globals.css";
import { Header } from "@/components/widgets/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthSession from "@/context/NextAuth";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tiara 2024",
  description:
    "National level techno-cultural fest, Tiara 2024 at SJEC Mangaluru",
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
        <div className="mx-4">
          <AuthSession>
            <Header />
            {children}
          </AuthSession>
        </div>
      </body>
    </html>
  );
}
