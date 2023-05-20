import showdown from "showdown";


const converter = new showdown.Converter();

// This function fetches from a filepath a Markdown file and returns the content as HTML in a string.
// Usage: import fetchMarkdown from '../utilities/get_md.ts';
 async function fetchMarkdown(filepath: string): Promise<string> {
   try {
      const response = await fetch(filepath);
      const data = await response.text();
      const html = converter.makeHtml(data);
      // console.log(html);
      return html;
   } catch (err) {
     console.error('There was an error fetching the Markdown file:', err);
   }
 }
 
 async function parseMarkdown(filepath: string): Promise<{title: string, content: string}> {
   const html = await fetchMarkdown("/2023/may/19.md")
     const title: string = html.match(/<h1(.*?)<\/h1>/)[0];
     let content: string = html.replace(/<h1(.*?)<\/h1>/, "");
    content = content.replace(/<pre><code>[\s\S]*?<\/code><\/pre>/g, `<span onload="hljs.highlightAll()">$&</span>`);
      // console.log(content);
     return {title, content};
 }

export { parseMarkdown };

// for use in future syntax highlighting hljs.highlightAuto(block, ["json", "ts", "js", "html", "css", "swift", "py", "go", "cpp"]);