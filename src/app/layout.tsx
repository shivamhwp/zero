import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { Footer } from "./components/footer";
import TopNav from "./components/topnav";

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
        <body className="flex h-screen w-screen flex-col bg-black text-white  text-opacity-85">
          <main className="flex  h-full  w-full flex-col   gap-8 bg-black p-6 lg:px-64 lg:pt-8">
            <SignedOut>
              <div
                className="flex h-full w-full flex-col items-center justify-center 
              shadow-lg hover:shadow-2xl"
              >
                <div className="flex h-16 w-48 items-center justify-center  rounded-lg bg-white  font-sans text-lg text-black ">
                  <SignInButton />
                </div>
              </div>
            </SignedOut>
            <SignedIn>
              <TopNav />
              {children}
            </SignedIn>
          </main>
          {/* <Footer /> */}
        </body>
      </ClerkProvider>
    </html>
  );
}
