import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/dist/server/api-utils";
import Logout from "../component/Logout";

const HomePage = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div className="flex flex-col items-center m-4">
      <h1>Welcome, {session?.user?.name}</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
      />
      <Logout />
    </div>
  );
};

export default HomePage;