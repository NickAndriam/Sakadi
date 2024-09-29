import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/reusables/Navbar";
import SideBar from "@/components/reusables/Sidebar";
import BubbleMenu from "@/components/BubbleMenu";
import Notification from "@/components/Notification";
import Root from "@/components/layout/Root";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sakadi",
  description: "Admin de Sakadi company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} flex relative`}
        >
          <SideBar />
          <BubbleMenu />
          <div className="lg:w-[80%] md:w-full w-full lg:p-10 md:p-4 p-4 relative">
            <Navbar />
            {children}
          </div>
          <Notification />
        </body>
      </Root>
    </html>
  );
}
