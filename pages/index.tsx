import { MainContainer } from "components/common";
import { PageContainer } from "styles";
import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1>Home</h1>
      </PageContainer>
    </MainContainer>
  );
}
