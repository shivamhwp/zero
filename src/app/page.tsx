export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center ">
      <div className="flex h-auto w-full flex-col items-center gap-4 pt-56 ">
        <h1 className=" text-center text-3xl font-bold">
          didn&apos;t sleep well last night ? try this!
          <a
            href="https://www.youtube.com/watch?v=KHIbgSN2qAU"
            className="px-2 font-normal text-blue-500 hover:underline"
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
    </div>
  );
}
