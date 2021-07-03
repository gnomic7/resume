// You need to import `h` factory function as Deno Deploy
// uses it instead of `React.createElement`
import { h } from 'https://x.lcas.dev/preact@10.5.12/mod.js';
import { renderToString } from 'https://x.lcas.dev/preact@10.5.12/ssr.js';
import Intro from './components/Intro/mod.tsx';

function App() {
  return (
    <html>
      <head>
        <title>Resume - Rohit K Dhakal</title>
      </head>
      <body>
        <Intro />
      </body>
    </html>
  );
}

addEventListener('fetch', (event) => {
  // renderToString generates html string from JSX components.
  const response = new Response(renderToString(<App />), {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });

  event.respondWith(response);
});
