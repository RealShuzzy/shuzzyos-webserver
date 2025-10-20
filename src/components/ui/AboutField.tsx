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
        <div className="bg-nosferatu-800 rounded-2xl grid grid-rows-[5rem_1fr] grid-cols-[5rem_1fr] lg:grid-cols-[1fr_35%] p-[2rem]">

          <img src={image.src} alt={image.alt} className="bg-blue lg:h-[13.5rem] lg:row-span-2 lg:col-span-1 lg:order-2"/>

          <div className="bg-red lg:order-1 lg:col-span-1 lg:row-span-1">{title}</div>

          <div className="bg-green col-span-2 lg:col-span-1 lg:order-3 lg:row-span-1">{text}</div>

          
        </div>
        
    )
}

