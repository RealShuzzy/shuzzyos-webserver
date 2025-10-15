'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useEffect } from "react"

export default function Login() {

  const router = useRouter()
  const popup = useRef<HTMLDivElement>(null)

  useEffect(() => { 
    function handleClickOutside(event: MouseEvent) {
      if (popup.current && !popup.current.contains(event.target as Node)) {
        router.back()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [router])

  return (
    <div className="fixed inset-0 backdrop-blur-[10px] flex items-center justify-center">
      <div
        ref={popup}
        className="w-[45vh] h-[60vh] min-h-[432px] bg-nosferatu-700 opacity-90 rounded-xl shadow-lg p-[1vh] flex flex-col"
      >
        <div className="flex justify-center h-[17.5vh]">
          <img
            src="shuzzyos.png"
            alt="ShuzzyOS Icon with Vampire teeth"
            className=""
          />
        </div>

        <div className="flex flex-col items-center justify-center text-3xl font-bold h-[10vh] pt-[2vh]">
          <p className="text-blue text-[3vh]">Welcome to ShuzzyOS</p>
          <p className="text-blue-800 text-[1.5vh]">
            Please login to post in the community
          </p>
        </div>

        <p className="text-red items-center justify-center flex opacity-0 h-[5vh]">
          Authentication failed!
        </p>

        <form className="flex flex-col justify-between pl-[5vh] pr-[5vh] pb-[5vh] pt-[1vh] items-center h-[25vh]">
          <div className="flex flex-col space-y-1 w-full">
            <input
              type="text"
              id="username"
              placeholder="Username / Email"
              className="bg-nosferatu-800 p-3 rounded-4xl h-[4vh] text-center"
              required
            />
          </div>

          <div className="flex flex-col space-y-1 w-full">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="bg-nosferatu-800 p-3 rounded-4xl h-[4vh] text-center"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary rounded-4xl h-[4vh] font-semibold text-white bg-dracula w-[50%]"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center text-blue underline h-[2.5vh]">
          <Link href="/register">Don't have an account?</Link>
        </div>
      </div>
    </div>
  )
}