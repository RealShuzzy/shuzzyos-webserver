import Markdown from "../Markdown";

interface DownloadFieldOptions {
    title: string;
    image: {
        src: string;
        alt?: string;
    };
    markdown: {
        link: string;
        section: string[];
        subsection?: string;
    }
}

export default function DownloadField(opts: DownloadFieldOptions) {

    const { title, image, markdown } = opts;

    return (
        <div className="bg-nosferatu-800 rounded-2xl flex flex-col p-[2rem] pt-0">
            {markdown.section.map((sectionTitle, index) => (
                <Markdown 
                    key={index}
                    link={markdown.link} 
                    section={sectionTitle} 
                    subsection={markdown.subsection}
                />
            ))}
        </div>
        
    )
}

