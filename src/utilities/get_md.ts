import showdown from "showdown";
const converter = new showdown.Converter();

// This function fetches from a filepath a Markdown file and returns the content as HTML in a string.
// Usage: import fetchMarkdown from '../utilities/get_md.ts';
 async function fetchMarkdown(filepath: string): Promise<string> {
   try {
      const response = await fetch(filepath);
      const data = await response.text();
      const html = converter.makeHtml(data);
      console.log(html);
      return html;
   } catch (err) {
     console.error('There was an error fetching the Markdown file:', err);
   }
 }
 
 async function parseMarkdown(filepath: string): Promise<{title: string, content: string}> {
   const html = await fetchMarkdown("/2023/may/19.md")
     const title: string = html.match(/<h1(.*?)<\/h1>/)[0];
     const content: string = html.replace(/<h1(.*?)<\/h1>/, "");
     return {title, content};
 }

export { parseMarkdown };