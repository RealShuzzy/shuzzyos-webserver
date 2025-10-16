interface GitHubFieldOptions {
    title: string;
    text: string;
    image: string;
    alt?: string;
}

export default function GitHubField(opts: GitHubFieldOptions) {

    const { title, text, image, alt } = opts;

    return (
        <div className="bg-nosferatu-800 rounded-2xl flex p-5 flex-col hover:scale-95">

            <div className="h-full">

                <div className="h-[25%]">
                    <h2 className="text-dracula font-semibold text-3xl">{title}</h2>
                    <br />
                </div>
                
                <div className="flex h-[75%]">
                    <p className="text-lg w-[55%]">{text}</p>
                    <div className="w-[45%] flex items-center">
                        <img src={image} alt={alt}/>
                    </div>
                </div>
            </div>          
        </div>
    )
}

