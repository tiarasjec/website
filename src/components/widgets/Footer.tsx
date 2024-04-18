import Link from "next/link";
import InstagramIcon from "../icons/InstagramIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font w-full">
            <div className="container w-full px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a
                    href="/"
                    className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 prose"
                >
                    <span className="font-tiara ml-3 text-xl text-white tracking-wider">Ti</span>
                    <span className="font-tiara text-xl text-tiara_red tracking-wider">ar</span>
                    <span className="font-tiara text-xl text-white tracking-wider">a 2024</span>
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
                        <a className="ml-3 text-white hover:text-tiara_red transition-all" href="https://sjec.ac.in">
                            <WebsiteIcon />
                        </a>
                        <a className="ml-3 text-white hover:text-tiara_red transition-all" href="mailto:tiara@sjec.ac.in">
                            <EmailIcon />
                        </a>
                        <a className="ml-3 text-white hover:text-tiara_red transition-all" href="tel:+91 ">
                            <PhoneIcon />
                        </a>
                    </div>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
