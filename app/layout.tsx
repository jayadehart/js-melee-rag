import "./globals.css";
import { Public_Sans } from "next/font/google";
import { ActiveLink } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import "reflect-metadata";
import localFont from "next/font/local";
import { CSSProperties } from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavSidebar } from "@/components/NavSidebar";

const publicSans = Public_Sans({ subsets: ["latin"] });

const meleeFont = localFont({ src: "../public/melee_font.ttf" });

const meleeStyle: CSSProperties = {
  background: "linear-gradient(to bottom, red, blue)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Melee RAG</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>

      <body className={`${publicSans.className} bg-customGray`}>
        <SidebarProvider>
          <NavSidebar />
          <SidebarInset className="bg-customGray">
            <SidebarTrigger className="hover:bg-gray-500 rounded-sm ml-1 mt-1" />
            <div className="bg-customGray grid grid-rows-[auto,1fr] h-full">
              <div className="grid grid-cols-[1fr,auto] gap-2 p-4">
                <nav className="flex flex-col items-center justify-center text-7xl text-center">
                  <div className="outline-container">
                    <h1 className={`${meleeFont.className} element`}>
                      SUPER RAG BROS
                    </h1>
                    <h1 className={`${meleeFont.className} element`}>
                      SUPER RAG BROS
                    </h1>
                  </div>
                </nav>

                <div className="flex justify-center items-center"></div>
              </div>
              <div
                className="bg-customDark mx-4 xl:ml-auto xl:mr-auto xl:w-2/3 2xl:w-1/2  relative grid rounded-t-2xl border border-customDark border-b-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(8,21,38, 0.5) 0 100%), url('/textures/testbg.png')",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0">{children}</div>
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
