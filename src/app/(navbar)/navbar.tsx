'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {

  const pathname = usePathname()

  return (
    <nav className="bg-nosferatu-950 flex flex-row w-full h-[4rem] items-center p-[0.5rem] fixed z-50">

      <div className="flex flex-row h-full items-center max-w-[20vw] flex-grow">
        <Link href="/" className="flex flex-row items-center h-full hover:bg-nosferatu-900 rounded-xl gap-[1rem] active:scale-90 hover:text-dracula">
          <img src="shuzzyos.png" alt="Logo with vampire teeth" className="h-full"/>
          <p className="font-semibold text-xl pr-[1rem]">ShuzzyOS</p>
        </Link>
        <div className="flex-grow"/>
      </div>

      <div className="flex-grow"/>

      <div className="flex flex-row gap-[2rem] h-full">

        <Link href={"/"} className={`hover:text-dracula hover:bg-nosferatu-900 active:scale-90 w-full h-full p-[0.75rem] rounded-xl ${ pathname === "/" ? "text-dracula" : ""}`}>Home</Link>
        <Link href={"/news"} className={`hover:text-dracula hover:bg-nosferatu-900 active:scale-90 w-full h-full p-[0.75rem] rounded-xl ${ pathname === "/news" ? "text-dracula" : ""}`}>News</Link>
        <Link href={"/preview"} className={`hover:text-dracula hover:bg-nosferatu-900 active:scale-90 w-full h-full p-[0.75rem] rounded-xl ${ pathname === "/preview" ? "text-dracula" : ""}`}>Preview</Link>
        <Link href={"/download"} className={`hover:text-dracula hover:bg-nosferatu-900 active:scale-90 w-full h-full p-[0.75rem] rounded-xl ${ pathname === "/download" ? "text-dracula" : ""}`}>Download</Link>

        <a href="https://github.com/RealShuzzy/ShuzzyOS" target="_blank">
          <div className="hover:text-dracula hover:bg-nosferatu-900 active:scale-90 w-full h-full p-[0.75rem] rounded-xl">
            GitHub
          </div>
        </a>

        <Link href={"/community"} className={`hover:text-dracula hover:bg-nosferatu-900 active:scale-90 w-full h-full p-[0.75rem] rounded-xl ${ pathname === "/community" ? "text-dracula" : ""}`}>Community</Link>

      </div>

      <div className="flex-grow"/>

      <div className="flex flex-row h-full items-center max-w-[20vw] gap-[1rem] flex-grow">
        <div className="flex-grow"/>
        <Link href={"/login"} className={`flex justify-center bg-nosferatu-900 hover:bg-dracula active:scale-90 h-full p-[0.75rem] rounded-xl w-[5rem] border-dracula border-[0.15rem] ${ pathname === "/login" ? "text-dracula" : ""}`}>Login</Link>
      </div>

    </nav>
  )
}