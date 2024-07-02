import AudioPlayer from "../components/audio-player";

export default function Nsdr() {
  return (
    <main className="flex h-full  w-full flex-col items-center justify-center  ">
      <div className="text-lg">
        <AudioPlayer src="https://utfs.io/f/489eec94-cc61-400f-95ea-5c30c6756de2-dwrva6.mp3" />
      </div>
    </main>
  );
}
