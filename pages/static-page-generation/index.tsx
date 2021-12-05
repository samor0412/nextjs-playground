import { MainContainer } from "components/common";
import Head from "next/head";
import styled from "styled-components";
import { PageContainer, YellowNote, Tag1 } from "styles";

interface Props {
  currentTime: string;
}

export async function getStaticProps() {
  return {
    props: {
      currentTime: new Date().toISOString(),
    },
  };
}

export default function Home({ currentTime }: Props) {
  return (
    <MainContainer>
      <Head>
        <title>Static Page Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1>Static Page Generator</h1>
        <p>
          Next.js has two forms of pre-rendering: Static Generation and
          Server-side Rendering. The difference is in when it generates the HTML
          for a page.
          <ul>
            <li>
              Static Generation is the pre-rendering method that generates the
              HTML at build time. The pre-rendered HTML is then reused on each
              request.
            </li>
            <li>
              Server-side Rendering is the pre-rendering method that generates
              the HTML on each request.
            </li>
          </ul>
          <span>
            <b>
              Reference:{" "}
              <a href="https://nextjs.org/learn/basics/data-fetching/two-forms">
                https://nextjs.org/learn/basics/data-fetching/two-forms
              </a>
            </b>
          </span>
        </p>
        <img
          src="https://nextjs.org/static/images/learn/data-fetching/static-generation.png"
          alt="static-generatiion"
          width="450"
        />
        <img
          src="https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png"
          alt="SSR"
          width="450"
        />

        <p>
          <b>getStaticProps</b> only runs on the server-side at build time. It
          will never run on the client-side.
        </p>

        <ul>
          <li>
            In development (npm run dev or yarn dev), getStaticProps runs on
            every request.
          </li>
          <li>In production, getStaticProps runs at build time.</li>
        </ul>
        <p>
          <Tag1>Current Time: {currentTime}</Tag1>
        </p>
        <p>
          <YellowNote>
            The static content of <Tag1>blue line</Tag1> will keep the same in
            every load when it is in production mode. <br />
            Use <b>getStaticProps</b> can be prepared in build time instead of
            each request. It is useful when the content is static and not
            updated frequently. This can reduce the Database request.
          </YellowNote>
        </p>
        <p>
          <b>
            Reference:{" "}
            <a href="https://nextjs.org/learn/basics/data-fetching">
              https://nextjs.org/learn/basics/data-fetching
            </a>
          </b>
        </p>
      </PageContainer>
    </MainContainer>
  );
}
