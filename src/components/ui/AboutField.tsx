interface AboutFieldOptions {
    title: string;
    text: string;
    image: {
        src: string;
        alt?: string;
    };
}

export default function AboutField(opts: AboutFieldOptions) {

    const { title, text, image } = opts;

    return (
        <div className="bg-nosferatu-800 rounded-2xl flex p-10 min-w-[500px]">

          <div className="max-w-2/3">

            <h2 className="text-dracula font-semibold text-3xl">{title}</h2>
            <p className="text-lg text-justify">{text}</p>

          </div>

          <div className="flex-grow"/>
          <img src={image.src} alt={image.alt}/>
        </div>
        
    )
}

