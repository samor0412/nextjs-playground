import { MainContainer } from "components/common";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>About</>
    </MainContainer>
  );
}
