import type { Metadata } from "next";
import { Header } from "@/components/widgets/Header";

export const metadata: Metadata = {
  title: "Tiara 2024",
  description: "Gallery of Tiara 2024",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
