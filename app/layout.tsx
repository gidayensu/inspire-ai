import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNavBar from "@/components/nav/BottomNavBar";
import TopNav from "@/components/nav/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inspire AI",
  description: "Get Inspired by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-12`}>
        <div className="mx-5">
        <TopNav/>
        </div>
        {children}
        <BottomNavBar/>
        </body>
    </html>
  );
}