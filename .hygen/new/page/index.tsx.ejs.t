---
to: <%= absPath %>/index.tsx
---
<%
    title = h.inflection.titleize(component_name) 
%>
import { MainContainer } from "components/common";
import Head from "next/head";
import { PageContainer } from "styles";
<%- need_style_file ? `import { StyledCode } from "./styles"` : null %>

interface Props {}

export default function  <%= component_name %>({}: Props) {
  return (
    <MainContainer>
      <Head>
        <title><%= title %></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1><%= title %></h1>
        <p>
          Background
        </p>
        <h3>Section</h3>
        <pre>
          <StyledCode>
            {`-- some code---`}
          </StyledCode>
        </pre>
      </PageContainer>
    </MainContainer>
  );
}
