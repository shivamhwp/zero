import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function TopNav() {
  return (
    <div className="flex  items-center justify-between ">
      <div className="flex items-center gap-4 text-xl">
        <Link href="" className="text-xl font-bold lg:text-2xl xl:text-3xl">
          zero
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 rounded-full bg-white px-4  py-3 text-xl text-black shadow-white hover:cursor-pointer hover:underline max-sm:px-3 max-sm:py-2">
        account
        <UserButton />
      </div>
    </div>
  );
}
