import Link from "next/link"

interface ShuzzyOSBannerOptions {
    download?: boolean;
}

export default function ShuzzyOSBanner({ download = true }: ShuzzyOSBannerOptions) {
    return (
        <div className="flex flex-col justify-center items-center bg-nosferatu-800 rounded-2xl">
            <div className="grid grid-cols-5 w-full h-full">
            <div className="flex justify-center items-center">
                <img src="dev.png" alt=""/>
            </div>
            
            <div className="flex flex-col justify-center items-center col-span-3">
                <h1 className="text-7xl font-semibold p-3">ShuzzyOS</h1>
                <p className="text-blue text-xl">// The perfect Linux distrobution for developers and gamers</p>

                {download && <Link href="/download" className="bg-dracula p-5 rounded-2xl mt-4 active:scale-90">Download</Link>}
            </div>

            <div className="flex justify-center items-center">
                <img src="gamer.png" alt=""/>
            </div>
            </div>
        </div>
    )
}

