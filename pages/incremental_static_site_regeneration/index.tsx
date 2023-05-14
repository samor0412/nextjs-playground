import { MainContainer } from "components/common";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { PageContainer, YellowNote, Tag1 } from "styles";
import moment from 'moment'

interface Props {
  lastBuildTime: string;
}

export async function getStaticProps() {
  return {
    props: {
      lastBuildTime: moment().format('h:m:s'),
    },
    revalidate: 10,
  };
}

export default function Home({ lastBuildTime }: Props) {
  const [currentTime, setCurrentTime] = useState(moment().format('h:m:s'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('h:m:s'))
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainContainer>
      <Head>
        <title>Incremental Static Site Regeneration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1>Incremental Static Site Regeneration (ISR)</h1>
        <p>
          Next.js allows prerender static content during build time to be regenerated
        </p>
        <p>
          <b>getStaticProps</b> only runs on the server-side at build time. It
          will never run on the client-side. By Adding <Tag1>revalidate</Tag1> to the return
          value of <b>getStaticProps</b>, the static content will be updated by the given time
        </p>

        <ul>
          <li>
            In development (npm run dev or yarn dev), getStaticProps runs on
            every request.
          </li>
          <li>In production, the content below will be regenerated per 10sec</li>
        </ul>
        <p>
          <Tag1>Current Time: {currentTime}</Tag1><br />
          <Tag1>Last Build Time: {lastBuildTime}</Tag1>
        </p>
        <p>
          <YellowNote>
            The static content of <Tag1>blue line</Tag1> will keep the same in
            every load when it is in production mode. <br />
            Add <Tag1>revalidate</Tag1> to <b>getStaticProps</b> can regenerate the content of the page per
            interval without rebuilding all the pages. It is useful when the content is static but it needs to be updated
            regularly. This can reduce the Database request.
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
