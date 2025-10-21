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
        <div className="bg-nosferatu-800 rounded-2xl grid grid-rows-[3rem_1fr] grid-cols-[3rem_1fr] lg:grid-cols-[1fr_13rem] p-[2rem]">

          <img src={image.src} alt={image.alt} className="h-[3rem] lg:h-[11rem] lg:row-span-2 lg:col-span-1 lg:order-2 lg:pl-[2rem]"/>

          <h2 className="lg:order-1 lg:col-span-1 lg:row-span-1 text-dracula font-semibold flex items-center pl-[1rem] lg:pl-0">{title}</h2>

          <p className="col-span-2 lg:col-span-1 lg:order-3 lg:row-span-1 overflow-scroll pt-[1rem] lg:pt-0 xl:text-[1rem]">{text}</p>

          
        </div>
        
    )
}

