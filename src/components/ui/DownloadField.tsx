interface DownloadFieldOptions {
    title: string;
    text: string;
    image: {
        src: string;
        alt?: string;
    };
    link?: string;
}

export default function DownloadField(opts: DownloadFieldOptions) {

    const { title, text, image, link } = opts;

    return (
        <div className="bg-nosferatu-800 rounded-2xl flex p-5 flex-col row-span-2">
            <div className="h-full">

                <div className="h-[15%]">
                    <h2 className="text-dracula font-semibold text-3xl">{title}</h2>
                    <br />
                </div>
                
                <div className="flex h-[85%]">
                    <p className="text-lg w-[75%]">{text}</p>
                    <div className="w-[25%] flex items-center pl-5">
                        <img src={image.src} alt={image.alt}/>
                    </div>
                </div>

            </div>          
        </div>
        
    )
}

