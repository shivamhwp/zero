import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#E5E5F7] text-center">
      <h2 className="text-3xl font-medium">huh! what are you doing here?</h2>
      <Link href="/">
        <div className="text-lg text-blue-600 hover:underline">
          go home. sleep.
        </div>
      </Link>
    </div>
  );
}
