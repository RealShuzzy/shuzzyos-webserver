import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/app/(navbar)/navbar";
import Bottom from "./(bottom)/bottom";
import localFont from 'next/font/local'

const firaCodeNerd = localFont({
  src: [
    {
      path: '../../public/fonts/FiraCode/FiraCodeNerdFont-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FiraCode/FiraCodeNerdFont-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-fira-code',
});

export default function RootLayout({
  children,
  modal = null,
}: {
  children: ReactNode;
  modal?: ReactNode;
}) {
  return (
    <html lang="en" className={firaCodeNerd.className}>
      <body className="volumecontrol-initialized">
        <Navbar/>
        <main className="pt-[4rem]">
          {children}
        </main>
        {modal}
        <Bottom/>
      </body>
    </html>
  );
}