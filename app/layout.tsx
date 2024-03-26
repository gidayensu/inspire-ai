import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import BottomNavBar from "@/components/nav/BottomNavBar";
import TopNav from "@/components/nav/TopNav";


const inter = Roboto({ weight: '300', subsets:['latin']});

export const metadata: Metadata = {
  title: "Inspire AI",
  description: "Get Inspired by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{


  return (
    <html lang="en">
      <body className={`${inter.className} pb-16`}>
        <div className="mx-5">
        <TopNav/>
        </div>
        {children}
        <BottomNavBar/>
        </body>
    </html>
  );
}