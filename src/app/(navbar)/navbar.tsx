'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {

  const pathname = usePathname()

  return (
    <nav className="bg-nosferatu-950 flex flex-row w-full h-15 items-center p-2 fixed">

      <div className="flex flex-row h-full items-center max-w-[20vw] gap-2 flex-grow">
        <img src="shuzzyos.png" alt="Logo with vampire teeth" className="h-full"/>
        <p className="font-semibold text-xl">ShuzzyOS</p>
        <div className="flex-grow"/>
      </div>

      <div className="flex-grow"/>

      <div className="flex flex-row gap-4 h-full">

        <Link href={"/"} className={`hover:text-dracula hover:bg-nosferatu-900 w-full h-full p-2 rounded-xl ${ pathname === "/" ? "text-dracula" : ""}`}>Home</Link>
        <Link href={"/news"} className={`hover:text-dracula hover:bg-nosferatu-900 w-full h-full p-2 rounded-xl ${ pathname === "/news" ? "text-dracula" : ""}`}>News</Link>
        <Link href={"/preview"} className={`hover:text-dracula hover:bg-nosferatu-900 w-full h-full p-2 rounded-xl ${ pathname === "/preview" ? "text-dracula" : ""}`}>Preview</Link>
        <Link href={"/download"} className={`hover:text-dracula hover:bg-nosferatu-900 w-full h-full p-2 rounded-xl ${ pathname === "/download" ? "text-dracula" : ""}`}>Download</Link>

        <a href="https://github.com/RealShuzzy/ShuzzyOS" target="_blank">
          <button className="hover:text-dracula hover:bg-nosferatu-900 w-full h-full p-2 rounded-xl">
            GitHub
          </button>
        </a>

        <Link href={"/community"} className={`hover:text-dracula hover:bg-nosferatu-900 w-full h-full p-2 rounded-xl ${ pathname === "/community" ? "text-dracula" : ""}`}>Community</Link>

      </div>

      <div className="flex-grow"/>

      <div className="flex flex-row h-full items-center max-w-[20vw] gap-4 flex-grow">
        <div className="flex-grow"/>
        <Link href={"/login"} className={`flex justify-center bg-nosferatu-900 h-full p-2 rounded-xl w-20 border-dracula border-2 active:bg-dracula ${ pathname === "/login" ? "text-dracula" : ""}`}>Login</Link>
      </div>

    </nav>
  )
}