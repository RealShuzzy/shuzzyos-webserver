import { remark } from "remark";
import html from "remark-html";

interface MarkdownOptions {
  link: string;
  section?: string;
  subsection?: string;
}

export default async function Markdown(opts: MarkdownOptions) {
  const { link, section, subsection} = opts;

  const data = await fetch(link);
  const markdown = await data.text();

  let markdownToRender = markdown;

  // Step 1: Filter by ## Section
  if (section) {
    const lines = markdown.split("\n");

    const sectionStartIndex = lines.findIndex(
      (line) => line.trim() === `## ${section}`
    );

    if (sectionStartIndex !== -1) {
      const afterSection = lines.slice(sectionStartIndex + 1);
      const sectionEndIndex = afterSection.findIndex((line) =>
        line.startsWith("## ")
      );

      const sectionLines = afterSection.slice(
        0,
        sectionEndIndex !== -1 ? sectionEndIndex : undefined
      );

      markdownToRender = sectionLines.join("\n");

      // Step 2: If subsection is provided, filter inside the section
      if (subsection) {
        const subLines = markdownToRender.split("\n");

        const subStartIndex = subLines.findIndex(
          (line) => line.trim() === `### ${subsection}`
        );

        if (subStartIndex !== -1) {
          const afterSub = subLines.slice(subStartIndex + 1);
          const subEndIndex = afterSub.findIndex((line) =>
            line.startsWith("### ")
          );

          // ✅ Include the `### Subsection` title by slicing from subStartIndex (not +1)
          const subSectionLines = subLines.slice(
            subStartIndex,
            subEndIndex !== -1 ? subStartIndex + 1 + subEndIndex : undefined
          );

          markdownToRender = subSectionLines.join("\n");
        } else {
          markdownToRender = `_Subsection "${subsection}" not found._`;
        }
      }
    } else {
      markdownToRender = `_Section "${section}" not found._`;
    }
  }

  const processedMarkdown = await remark()
    .use(html)
    .process(markdownToRender);

  let htmlMarkdown = processedMarkdown.toString();
  //remove last <hr/> or a section
  htmlMarkdown = htmlMarkdown.replace(/(<hr\s*\/?>)(?![\s\S]*<hr\s*\/?>)/i, "");

  return (
    <>
      <h2 className="relative translate-[1.75rem] px-[0.5rem] bg-nosferatu-800 w-fit">{section}</h2>
      <div
        id="markdown"
        className="prose prose-invert max-w-none border-2 border-blue rounded-2xl p-[1rem] pt-[1.5rem] mt-[0.75rem] overflow-scroll"
        dangerouslySetInnerHTML={{ __html: htmlMarkdown }}
      />
    </>
    
  );
}