import { html } from "lit";
import { customElement, query, queryAll, state } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";
import style from "./template.post.css?inline";
import { parseMarkdown } from "../utilities/get_md";

@customElement("blog-post")
export class BlogPost extends TailwindElement(style) {
  @state() title: string = "";
  @state() content: string = "";
  @query("#post-title") postTitle: HTMLElement;
  @query("#content-body") contentBody: HTMLElement;

  async connectedCallback() {
    super.connectedCallback();
    const {title, content} = await parseMarkdown("/2023/may/19.md");
    this.title = title;
    this.content = content;
    // console.log(this.title, this.content);
    this.postTitle.innerHTML = this.title;
    this.contentBody.innerHTML = this.content;
  }
  

// change to modular components. Add a component for the title, a component for the content, and a component for the author info. Work on styling code with hljs.

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/atom-one-light.min.css">
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/atom-one-light.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
  <script>hljs.initHighlightingOnLoad();</script>
    <article class="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
    <div class="w-full mx-auto space-y-4 text-center">
      <p class="text-xs font-semibold tracking-wider uppercase">solid principles</p>
      <div class="text-4xl font-bold leading-tight md:text-5xl" id="post-title">
       </div>
      <p class="text-sm dark:text-gray-400">by
        <a rel="noopener noreferrer" href="#" target="_blank" class="underline">
          <span itemprop="name">Caleb Barzee</span>
        </a>on
        <time>May 19, 2023 | 9:30 AM</time>
      </p>
    </div>
    <div class="dark:text-gray-100" id="content-body">
    </div>
    <div class="pt-12 border-t dark:border-gray-700">
      <div class="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img src="/assets/caleb_pro_portrait_final.jpg" alt="Profile image of Caleb Barzee" class="self-center flex-shrink-0 w-24 h-auto border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700">
        <div class="flex flex-col">
          <h4 class="text-lg font-semibold">Caleb Barzee</h4>
          <p class="dark:text-gray-400">Passionate software engineer with a love for all things creative and a curious mind. When I'm not immersed in coding, you can find me exploring the open road on my bicycle, kicking around a soccer ball, getting my hands messy with pottery, experimenting with new recipes in the kitchen, or delving into the world of design. I believe in the power of technology to create meaningful experiences and I'm constantly seeking new ways to combine my technical skills with my diverse interests. Let's collaborate and make something extraordinary together!</p>
        </div>
      </div>
      <div class="flex justify-center pt-4 space-x-4 align-center">
        <a rel="noopener noreferrer" href="#" aria-label="GitHub" class="p-2 rounded-md dark:text-gray-100">
          <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </a>
        
        <a rel="noopener noreferrer" href="#" aria-label="Email" class="p-2 rounded-md dark:text-gray-100 ">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current">
            <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
          </svg>
        </a>
      </div>
    </div>
  </article>
    `;
  }
}
