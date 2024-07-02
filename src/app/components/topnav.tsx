import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <div className="flex  items-center justify-between ">
      <div className="flex items-center gap-4 text-xl">
        <Link href="" className="font-bold">
          zero
        </Link>
      </div>
      <div className="">
        <UserButton />
      </div>
    </div>
  );
}
