import { auth } from "@/auth";
import { UserRole } from "@prisma/client";
import Image from "next/image";

// Only Admin can access this page
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session || session.user.role !== UserRole.ADMIN) {
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
