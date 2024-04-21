import Link from "next/link";
import InstagramIcon from "../icons/InstagramIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import { tiaraFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="body-font w-full">
      <div className="container w-full px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className={cn(
            "flex title-font font-medium tracking-widest items-center md:justify-start justify-center prose text-white",
            tiaraFont.className
          )}
        >
          Ti<span className="text-tiara_red">ar</span>a{" "}
          <span className="text-tiara_red">{"'"}</span>24
        </a>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">
          © 2024 Developed by
          <a
            href="https://gdscsjec.in/"
            className="text-white font-bold ml-1 hover:text-tiara_red transition-all"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google DSC SJEC
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <div className="flex text-white gap-4 flex-col justify-center  items-center md:flex-row">
            <Link href={"/privacy"} className="hover:underline ">
              Privacy Policy
            </Link>
            <Link href={"/refund"} className="hover:underline">
              Refund Policy
            </Link>
            <Link href={"/terms"} className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
          <div className="grid ml-5 gap-4 md:flex">
            <a
              className="ml-3 text-white hover:text-tiara_red transition-all grid-cols-2"
              href="https://instagram.com/tiarasjec"
            >
              <InstagramIcon />
            </a>
            <a
              className="ml-3 text-white hover:text-tiara_red transition-all"
              href="https://sjec.ac.in"
            >
              <WebsiteIcon />
            </a>
            <a
              className="ml-3 text-white hover:text-tiara_red transition-all"
              href="mailto:tiara@sjec.ac.in"
            >
              <EmailIcon />
            </a>
            <a
              className="ml-3 text-white hover:text-tiara_red transition-all"
              href="tel:+91 "
            >
              <PhoneIcon />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
