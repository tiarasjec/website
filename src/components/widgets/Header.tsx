"use client";
import SJECLogo from "@/assets/sjeclogo.png";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { EncryptButton } from "@/components/ui/hover/button";
import { Item } from "@radix-ui/react-navigation-menu";

interface NavItem {
  label: string;
  href: string;
}

const NavItems: NavItem[] = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "events",
    href: "/events",
  },
  {
    label: "team",
    href: "/team",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "rulebook",
    href: "/rulebook",
  },
];

export function Header() {
  const { data: session } = useSession();
  return (
    <>
      <header className="flex sticky top-0 flex-wrap md:justify-center md:flex-nowrap z-50 w-full justify-center text-sm">
        <nav
          className="mt-6 relative max-w-[70rem] w-full shadow backdrop-blur-2xl bg-white bg-opacity-10 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-center md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-neutral-800 dark:border-neutral-700"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src={SJECLogo} alt="SJEC Logo" width={70} />
            </Link>
            <div className="md:hidden">
              <Button
                type="button"
                size={"icon"}
                variant={"secondary"}
                className="hs-collapse-toggle rounded-2xl shadow"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <HamburgerMenuIcon className="hs-collapse-open:hidden flex-shrink-0 size-4" />
                <Cross1Icon className="hs-collapse-open:block hidden flex-shrink-0 size-4" />
              </Button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              {NavItems.map((navItem, i) => (
                //  Using a tag because <Link> wouldn't close the navbar after switch
                <a
                  key={i}
                  href={navItem.href}
                  className="font-tiara tracking-widest"
                >
                  {navItem.label}
                </a>
              ))}
              {session && session.user ? (
                <a
                  className="flex items-center gap-x-2 md:border-s md:border-zinc-600 font-medium md:my-6 md:ps-6"
                  onClick={() => signOut()}
                >
                  <EncryptButton targetText="logout" />
                </a>
              ) : (
                <a
                  className="flex items-center gap-x-2 md:border-s md:border-zinc-600 font-medium md:my-6 md:ps-6"
                  onClick={() =>
                    signIn("google", {
                      callbackUrl: "/events",
                      redirect: true,
                    })
                  }
                >
                  <EncryptButton targetText="register now!" />
                </a>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
