import Link from "next/link"
import SJECLogo from "@/assets/sjeclogo.png";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font w-full">
            <div className="container w-full px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Image src={SJECLogo} alt="SJEC Logo" className="w-10 h-15" width={70}/>
                    <span className=" font-tiara ml-3 text-xl text-white ">Ti</span><span className=" font-tiara text-xl text-tiara_red ">ar</span><span className=" font-tiara text-xl text-white ">a 2024</span>
                </a>
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Developed by<a href="https://gdscsjec.in/" className="text-white font-bold ml-1 hover:text-tiara_red transition-all" rel="noopener noreferrer" target="_blank">Google DSC SJEC</a></p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <div className="flex text-white gap-4 flex-col justify-center  items-center md:flex-row">
                        <Link href={"/"} className="hover:underline">
                        Privacy Policy 
                        </Link>
                        <Link href={"/"} className="hover:underline">
                        Refund Policy
                        </Link>
                        <Link href={"/"} className="hover:underline">
                        Terms & Conditions
                        </Link>
                    </div>
                    <div className="grid ml-5 gap-4 md:flex">
                        <a className="ml-3 text-white hover:text-tiara_red transition-all grid-cols-2" href="https://instagram.com/tiarasjec">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg></a><a className="ml-3 text-white hover:text-tiara_red transition-all" href="https://sjec.ac.in"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-5"><path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539a6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539a6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855c.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path></svg></a><a className="ml-3 text-white hover:text-tiara_red transition-all" href="mailto:support@tiarasjec.in"><svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7.175q.125 0 .262-.038q.138-.037.263-.112L19.6 8.25q.2-.125.3-.312q.1-.188.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.013Q4 7.05 4 7.525q0 .25.1.437q.1.188.3.288l7.075 4.425q.125.075.263.112q.137.038.262.038Z"></path></svg></a><a className="ml-3 text-white hover:text-tiara_red transition-all" href="tel:+91 8660846980"><svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.225 0-6.287-1.438q-3.063-1.437-5.425-3.8q-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637q-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338q.362-.112.712-.062l3.45.7q.35.075.575.337q.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025q.225 1 .65 1.975ZM19 18.95v-2.2l-2.35-.475l-1.675 1.675q.975.425 1.988.675q1.012.25 2.037.325Zm-4-1.025ZM6.025 9Z"></path></svg></a>
                    </div>
                    
                </span>
                </div>
        </footer>
    );
}

export default Footer
