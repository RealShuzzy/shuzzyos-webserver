import AboutField from "@/components/ui/AboutField"
import GitHubField from "@/components/ui/GitHubField"
import ShuzzyOSBanner from "@/components/ui/ShuzzyOSBanner"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-nosferatu-900 text-light">

      <div className="h-[120vh] bg-nosferatu grid m-5 gap-5 grid-cols-2 grid-rows-4">
        <div className="col-span-2">
          <img src="shuzzyos_banner.png" alt="ShuzzyOS logo (vampire teeth)" className="w-full h-full object-cover items-center justify-center rounded-2xl" />
        </div>
        
        <ShuzzyOSBanner download={true} />

        <AboutField
          title="What is ShuzzyOS?"
          text="ShuzzyOS is a Linux distrobution based on Arch Linux.
              It comes with a fully customized Hyprland desktop environment and an easy to use visual installer.
              Not sure? Try ShuzzyOS in its Live-ISO without installing it!"
          image={{ src:"arch.png", alt:"Arch Linux logo"}}
        />

        <AboutField
          title="Dracula Theme"
          text="ShuzzyOS uses the Dracula theme because of its awesome color palette that looks great and supports almost every app out there.
              It’s the perfect dark theme for developers and gamers who want a stylish, consistent look that is easy on the eyes."
          image={{ src:"dracula.png", alt:"Dracula-Theme Dracula logo"}}
        />

        <div className="col-span-2 h-[30vh] bg-nosferatu grid gap-5 grid-cols-5 grid-rows-1">

          <GitHubField 
            title="Read Me" 
            text="Get an overview of ShuzzyOS. Learn how to install and use this Linux distro." 
            image={{ src:"book-open-text.png", alt:"Open book with text" }}
            link="https://github.com/RealShuzzy/ShuzzyOS/blob/main/README.md"
          />

          <GitHubField 
            title="Wiki" 
            text="Having problems or want to customize ShuzzyOS? Check the GitHub Wiki for detailed documentation." 
            image={{ src:"notebook-pen.png", alt:"Notebook with pen" }}
            link="https://github.com/RealShuzzy/ShuzzyOS/wiki"
          />

          <GitHubField 
            title="GitHub" 
            text="View the source code on the official ShuzzyOS GitHub repository." 
            image={{ src:"github.png", alt:"GitHub logo" }}
            link="https://github.com/RealShuzzy/ShuzzyOS"
          />

          <GitHubField 
            title="Credits" 
            text="Thanks to all the developers and open source projects that made ShuzzyOS possible." 
            image={{ src:"creative-commons.png", alt:"Creative Commons logo" }}
            link="https://github.com/RealShuzzy/ShuzzyOS/blob/main/CREDITS.md"
          />

          <GitHubField 
            title="Contribute" 
            text="Have ideas or improvements for ShuzzyOS? Feel free to contribute or share your suggestions." 
            image={{ src:"git-pull-request-create-arrow.png" , alt:"GitHub pull request icon" }}
            link="https://github.com/RealShuzzy/ShuzzyOS/pulls"
          />
        </div>
        
      </div>

    </div>
  )
}