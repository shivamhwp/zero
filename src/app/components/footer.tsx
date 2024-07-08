export function Footer() {
  return (
    <footer className="flex h-16 w-full items-center justify-center gap-8  bg-black text-white text-opacity-85">
      <div> zero© </div>
      <div className="hover:underline">
        i&apos;m here <a href="https://shivam.ing">shivam.ing</a>
      </div>
      <a
        href="https://razorpay.me/@shivamhwp"
        className="hover:underline"
        target="_blank"
      >
        donate
      </a>
    </footer>
  );
}
