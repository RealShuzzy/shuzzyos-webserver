import DownloadField from "@/components/ui/DownloadField";
import ShuzzyOSBanner from "@/components/ui/ShuzzyOSBanner";

export default function Downloads() {

  return (
    <div className="h-[75rem] grid grid-cols-1 grid-rows-4 gap-[1rem] p-[1rem]">

      <ShuzzyOSBanner/>

      <div className="row-span-3 grid grid-rows-1 grid-cols-2 gap-[1rem]">
        <DownloadField
          title="Download the monthly ISO"
          image={{ src:"download.png", alt:"Download Icon" }}
          markdown={{ link:"https://raw.githubusercontent.com/RealShuzzy/ShuzzyOS/refs/heads/main/README.md", section:["💿 Getting the ISO"]}}
        />

        <DownloadField
          title="Guide"
          image={{ src:"book-open-text.png", alt:"Book" }}
          markdown={{ link:"https://raw.githubusercontent.com/RealShuzzy/ShuzzyOS/refs/heads/main/README.md", section:["🔧 Creating a Bootable USB Drive"] }}
        />
      </div>
      
    </div>
  )
}