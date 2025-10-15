import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/app/(navbar)/navbar";

export default function RootLayout({
  children,
  modal = null,
}: {
  children: ReactNode;
  modal?: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="volumecontrol-initialized">
        <Navbar/>
        <main className="pt-15">
          {children}
        </main>
        {modal}
      </body>
    </html>
  );
}