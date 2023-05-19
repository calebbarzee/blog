# Lit Web Components Starter Kit with TypeScript and Tailwind CSS

Welcome to my simple rapid web development starter kit. Designed to light up your development experience, this kit utilizes Vite, TypeScript, Lit, and Tailwind CSS. 

## Creating a Web Component
Here's a sample web component:

```typescript
import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {TailwindElement} from '../shared/tailwind.element';

import style from './test.component.css?inline';

@customElement('test-component')
export class TestComponent extends TailwindElement(style) { 

  @property()
  name?: string = 'World';

  render() {
    return html`
      <h3 class="text-lg">
        Hello, ${this.name}!
      </h3>
      <p class="text-gray-500">This test component uses Lit, Tailwind CSS, Vite, and TypeScript.</p>
    `;
  }
}
```
The main twist here? Our class extends a _TailwindElement_ instead of a LitElement, neatly integrating Tailwind CSS with your styles.

## Getting Started
Running the project is fairly straightforward.

1) `npm install` (only once)
2) `npm run dev` to start the live reload development server
3) `npm run build` to build for production

You can clone this repo and start developing your components using _test/test.component.ts_ as a guide.

If you're the DIY type:

1) Copy the shared files (_tailwind.element.ts_, _globals.d.ts_)
2) Copy the _package.json_ or the devDependencies into your own _package.json_
3) Copy _postcss.config.js_, _tailwind.config.js_, and _tsconfig.js_

## Behind the Scenes
Dependencies:
```json
"autoprefixer": "^10.4.12",
"postcss": "^8.4.18",
"lit": "^2.4.0",
"tailwindcss": "^3.2.0",
"typescript": "^4.8.4",
"vite": "^3.1.8"
```
- **vite** handles most of the work
- To integrate Tailwind CSS, _tailwind.element.ts_ is the key file

Alright, enough talking. Happy coding! (And remember, if it's not simple it's probably not maintainable. 😉)