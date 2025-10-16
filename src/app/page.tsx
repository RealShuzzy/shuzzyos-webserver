import GitHubField from "@/components/ui/GitHubField"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-nosferatu-900 text-light">

      <div className="h-[120vh] bg-nosferatu grid m-5 gap-5 grid-cols-2 grid-rows-4">
        <div className="col-span-2">
          <img src="shuzzyos_banner.png" alt="ShuzzyOS logo (vampire teeth)" className="w-full h-full object-cover items-center justify-center rounded-2xl" />
        </div>
        
        <div className="col-span-2 flex flex-col justify-center items-center bg-nosferatu-800 rounded-2xl">
          <div className="grid grid-cols-3 w-full h-full">
            <div className="flex justify-center items-center">
              <img src="dev.png" alt=""/>
            </div>
           
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-7xl font-semibold p-3">ShuzzyOS</h1>
              <p className="text-blue text-xl">// The perfect linux distro for developers and gamers</p>

              <Link href="/download" className="bg-dracula p-5 rounded-2xl mt-4">Download</Link>
            </div>

            <div className="flex justify-center items-center">
              <img src="gamer.png" alt=""/>
            </div>
          </div>
        </div>
        
        <div className="bg-nosferatu-800 rounded-2xl flex p-5 min-w-[500px]">
          <div className="max-w-2/3">
            <h2 className="text-dracula font-semibold text-3xl">What is ShuzzyOS?</h2>
            <br/>
            <p className="text-lg">ShuzzyOS simply takes a fresh Archlinux
              install and adds a fully customized desktop environment.
              In short: ShuzzyOS is Archlinux + Hyprland.
            </p>
          </div>
          <div className="flex-grow"/>
          <img src="arch.png" alt="Archlinux A-logo"/>
        </div>

        <div className="bg-nosferatu-800 rounded-2xl flex p-5 min-w-[500px]">
          <div>
            <h2 className="text-dracula font-semibold text-3xl">Dracula Theme</h2>
            <br />
            <p className="text-lg">Everything is themed with the Dracula-Theme
              colorpallet.
            </p>
          </div>
          <div className="flex-grow"/>
          <img src="dracula.png" alt="Dracula-Theme Icon (Dracula)"/>
        </div>

        <div className="col-span-2 h-[30vh] bg-nosferatu grid gap-5 grid-cols-5 grid-rows-1">

          <GitHubField title="Read me" text="To get an overview over ShuzzyOS. This will teach you how to install and use this linux distro." image="github.png" alt="Star"/>
          <GitHubField title="Documentation" text="Having any problems, or just want to customize ShuzzyOS? Check the documentation in the GitHub Wiki" image="github.png" alt="Star"/>
          <GitHubField title="GitHub" text="To view the source code, view the GitHub page of ShuzzyOS." image="github.png" alt="Star"/>
          <GitHubField title="Credits" text="Thanks to all the developers of used dependencies" image="github.png" alt="Star"/>
          <GitHubField title="Contribute" text="You have an improvement and whant to ShuzzyOS to get better? Feel free to contribute, or just share your ideas." image="github.png" alt="Star"/>
          
        </div>
        
      </div>

    </div>
  )
}