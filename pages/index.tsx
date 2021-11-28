import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Hello</Title>
    </div>
  );
}
