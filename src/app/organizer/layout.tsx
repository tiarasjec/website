import { auth } from "@/auth";
import Image from "next/image";


// A Admin and a Organizer can access this page
export default async function OrganizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session || !["ADMIN", "ORGANIZER"].includes(session.user.role)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <Image
            src="https://http.cat/images/403.jpg"
            alt="403 Forbidden"
            width={500}
            height={500}
          />
          <p className="text-lg">You are not allowed to access this page.</p>
        </div>
      </div>
    );
  }
  return <div className="p-10">{children}</div>;
}
