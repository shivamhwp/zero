import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "zero",
  description: "zzzzz",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <ClerkProvider>
        <body className=" flex h-screen w-screen flex-col items-center justify-center  bg-white  text-black">
          <main className="flex h-full w-full flex-col items-center justify-center bg-white lg:px-64 lg:pt-8">
            <SignedOut>
              <div
                className="flex h-16 w-48 flex-col items-center justify-center rounded-lg  bg-black font-sans  text-lg text-white
              shadow-lg hover:shadow-2xl"
              >
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>{children}</SignedIn>
          </main>
        </body>
      </ClerkProvider>
    </html>
  );
}
