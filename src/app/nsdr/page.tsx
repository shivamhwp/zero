export default function Nsdr() {
  return (
    <main className="flex h-full  w-full flex-col items-center justify-center  ">
      <div className="flex h-auto w-full flex-col items-center ">
        <h1 className="text-3xl font-bold">
          Andrew Huberman&apos;s 10mins NSDR Protocol{" "}
          <a
            href="https://www.youtube.com/watch?v=KHIbgSN2qAU"
            className="font-normal text-blue-500 hover:underline"
          >
            (original)
          </a>
        </h1>
        <audio controls>
          <source
            src="https://utfs.io/f/489eec94-cc61-400f-95ea-5c30c6756de2-dwrva6.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>
    </main>
  );
}
