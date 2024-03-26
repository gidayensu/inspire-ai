import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNavBar from "@/components/nav/BottomNavBar";
import TopNav from "@/components/nav/TopNav";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

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

  type Progress = number;
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