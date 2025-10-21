import Markdown from "@/components/Markdown";
import DownloadField from "@/components/ui/DownloadField";
import ShuzzyOSBanner from "@/components/ui/ShuzzyOSBanner";

export default function Downloads() {

  return (
    <div className="h-[75rem] grid grid-cols-1 grid-rows-4 gap-[1rem] p-[1rem]">

      <ShuzzyOSBanner download={false}/>

      <div className="grid grid-rows-1 grid-cols-2 gap-[1rem]">
        <DownloadField
          title="Download the monthly ISO"
          text="bla"
          image={{ src:"download.png", alt:"Download Icon" }}
          list={true}
        />

        <DownloadField
          title="Build your own ISO"
          text="bla"
          image={{ src:"hammer.png", alt:"Hammer Icon" }}
        />
      </div>

      <div className="bg-nosferatu-800 rounded-2xl flex p-5 min-w-[500px] col-span-1 row-span-2">
        <div className="max-w-full">
          <h2 className="text-dracula font-semibold text-3xl">Installation</h2>
          <br/>
          <Markdown link="https://raw.githubusercontent.com/RealShuzzy/ShuzzyOS/refs/heads/main/README.md" section="Install" subsection="Manual"/>
        </div>
      </div>
      
    </div>
  )
}