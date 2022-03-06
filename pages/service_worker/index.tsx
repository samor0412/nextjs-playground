import { MainContainer } from "components/common";
import Head from "next/head";
import { PageContainer } from "styles";
import { StyledCode } from "pages/styles";

interface Props {}

export default function Home({}: Props) {
  return (
    <MainContainer>
      <Head>
        <title>Service Worker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1>Service Worker</h1>
        <p>
          A service worker is a script that your browser runs in the background,
          separate from a web page, opening the door to features that don't need
          a web page or user interaction.
        </p>
        <p>
          A service worker has a lifecycle that is completely separate from your
          web page. To install a service worker for your site, you need to
          register it, which you do in your page's JavaScript. Registering a
          service worker will cause the browser to start the service worker
          install step in the background.
        </p>
        <p>
          A service worker acts as a network proxy in a web browser that manages
          network requests for a webpage
        </p>
        <h3>To Register Service Worker In Component</h3>
        <p>
          To install a service worker you need to kick start the process by
          registering it in your page. This tells the browser where your service
          worker JavaScript file lives.
        </p>
        <pre>
          <StyledCode>
            {`
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
          `}
          </StyledCode>
        </pre>
        <h3>To Install a Service Worker</h3>
        <p>
          Next.js 9.1 introduced the public directory support where we can store
          the files that will be mapped to the root of the domain. Create a file{" "}
          <code>sw.js</code> in <code>/public</code> and add install event
          listener
        </p>
        <pre>
          <StyledCode>
            {`
  self.addEventListener('xxx', function(event) {
      // intercept the event
  });
          `}
          </StyledCode>
        </pre>
        <p>
          Ref:{" "}
          <a href="https://ithelp.ithome.com.tw/articles/10216819">
            https://ithelp.ithome.com.tw/articles/10216819
          </a>
        </p>
      </PageContainer>
    </MainContainer>
  );
}
