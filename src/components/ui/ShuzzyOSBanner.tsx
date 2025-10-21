import Link from "next/link"

interface ShuzzyOSBannerOptions {
    download?: boolean;
}

export default function ShuzzyOSBanner({ download = true }: ShuzzyOSBannerOptions) {
    return (
        <div className="flex flex-col justify-center items-center bg-nosferatu-800 rounded-2xl lg:grid w-full h-full lg:grid-cols-[15%_70%_15%] xl:grid-cols-[20%_60%_20%] p-[2rem]">
            
            <div className="hidden lg:flex justify-center items-center">
                <img src="dev.png" alt="" className="lg:size-[5rem] xl:size-[6rem]"/>
            </div>
            

            <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold p-3 xl:text-lg">ShuzzyOS</h1>
                <p className="text-blue">// The perfect Linux distrobution for developers and gamers</p>

                {download && <Link href="/download" className="bg-dracula p-5 rounded-2xl mt-4 active:scale-90">Download</Link>}
            </div>

            <div className="hidden lg:flex justify-center items-center">
                <img src="gamer.png" alt="" className="lg:size-[5rem] xl:size-[6rem]"/>
            </div>

        </div>
    )
}

