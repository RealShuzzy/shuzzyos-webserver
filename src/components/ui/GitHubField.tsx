interface GitHubFieldOptions {
    title: string;
    text: string;
    image: {
        src: string;
        alt?: string;
    };
    link?: string;
}

export default function GitHubField(opts: GitHubFieldOptions) {

    const { title, text, image, link } = opts;

    return (
        <a href={link} target="_blank" className="bg-nosferatu-800 rounded-2xl flex p-10 flex-col hover:scale-95">
            <div className="h-full flex gap-5 flex-col">

                <div className="h-[25%] flex flex-row items-center gap-5">
                    <img src={image.src} alt={image.alt} className="h-full"/>
                    <h2 className="text-dracula font-semibold text-xl">{title}</h2>
                </div>
                
                <p className="text-lg text-justify">{text}</p>
            </div>          
        </a>
        
    )
}

