import AboutField from "@/components/ui/AboutField"
import GitHubField from "@/components/ui/GitHubField"
import ShuzzyOSBanner from "@/components/ui/ShuzzyOSBanner"

export default function Home() {
  return (
    <div className="h-[175rem] lg:h-[75rem] grid grid-cols-1 lg:grid-rows-4 grid-rows-9 gap-[1rem] p-[1rem]">

        <img src="shuzzyos_banner.png" alt="ShuzzyOS logo (vampire teeth)" className="w-full h-full object-cover items-center justify-center rounded-2xl" />

        <ShuzzyOSBanner download={true} />

        <div className="grid grid-cols-1 grid-rows-2 row-span-2 lg:row-span-1 lg:grid-cols-2 lg:grid-rows-1 gap-[1rem]">
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
        </div>

        <div className="grid grid-cols-1 grid-rows-5 row-span-5 lg:row-span-1 lg:grid-cols-5 lg:grid-rows-1 gap-[1rem]">
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
  )
}