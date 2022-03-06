import { MainContainer } from "components/common";
import Head from "next/head";
import styled from "styled-components";
import { PageContainer } from "styles";
import { StyledCode } from "pages/styles";

interface Props {}

export default function Home({}: Props) {
  return (
    <MainContainer>
      <Head>
        <title>Fetch API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1>Fetch API</h1>
        To serve content from the cache and make your app available offline you
        need to intercept network requests and respond with files stored in the
        cache. There are several approaches to this:
        <ul>
          <li>cache only</li>
          <li>network only</li>
          <li>cache falling back to network</li>
          <li>network falling back to cache</li>
          <li>cache then network</li>
        </ul>
        <p>
          In this website, we use network failling back to cache, which means
          when network fails, the browser will find the resource from cache. The
          code is like below:
        </p>
        <pre>
          <StyledCode>
            {`
  self.addEventListener("fetch", function (event) {
    event.respondWith(
      caches.open("mysite-dynamic").then(function (cache) {
        return caches.match(event.request).then((cacheResponse) => {
          return fetch(event.request)
            .then(function (response) {
              // if the cache doesn't hit, save the response in cache
              if (!cacheResponse) {
                cache.put(event.request, response.clone());
              }
              return response;
            })
            .catch(function () {
              // if the fetch fails, use cache
              return cacheResponse;
            });
        });
      })
    );
  });
          `}
          </StyledCode>
        </pre>
        <p>
          Ref:
          <a href="https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker">
            https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
          </a>
        </p>
      </PageContainer>
    </MainContainer>
  );
}
