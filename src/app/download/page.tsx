import Markdown from "@/components/Markdown";
import DownloadField from "@/components/ui/DownloadField";
import ShuzzyOSBanner from "@/components/ui/ShuzzyOSBanner";

export default function Downloads() {

  return (
    <div className="flex flex-col h-full bg-nosferatu-900 text-light">

      <div className="h-[120vh] bg-nosferatu grid m-5 gap-5 grid-cols-2 grid-rows-6">

        <ShuzzyOSBanner download={false}/>

        <DownloadField
          title="Download the monthly ISO"
          text="bla"
          image={{ src:"download.png", alt:"Download Icon" }}
        />

        <DownloadField
          title="Build your own ISO"
          text="bla"
          image={{ src:"hammer.png", alt:"Hammer Icon" }}
        />

        <div className="bg-nosferatu-800 rounded-2xl flex p-5 min-w-[500px] col-span-2 row-span-3">
          <div className="max-w-full">
            <h2 className="text-dracula font-semibold text-3xl">Installation</h2>
            <br/>
            <Markdown link="https://raw.githubusercontent.com/RealShuzzy/ShuzzyOS/refs/heads/main/README.md" section="Install" subsection="Manual"/>
          </div>
        </div>
        

      </div>
    </div>
  )
}