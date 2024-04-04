"use client";
import SJECLogo from "@/assets/sjeclogo.png";
import { Button } from "@/components/ui/button";
import { Button as FramerButton } from "@/components/ui/framer/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

interface NavItem {
  label: string;
  href: string;
}

const NavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Schedule",
    href: "/schedule",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "About",
    href: "#about",
  },
];

export function Header() {
  const { data: session } = useSession();
  return (
    <header className="z-50 sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Image src={SJECLogo} alt="SJEC Logo" width={100} height={100} />
        <span className="sr-only">Tiara 2024</span>
      </Link>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {NavItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image src={SJECLogo} alt="SJEC Logo" width={50} height={50} />
              <span className="sr-only">Tiara 2024</span>
            </Link>
            {NavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full justify-end items-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button asChild variant={"secondary"}>
          <Link href="/rulebook">Rulebook</Link>
        </Button>
        {session?.user ? (
          <Image
            src={session.user.image!}
            alt={session.user.name!}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <Button
            disabled
            onClick={() =>
              signIn("google", {
                callbackUrl: "/register",
              })
            }
          >
            Register!
          </Button>
        )}
      </div>
    </header>
  );
}
