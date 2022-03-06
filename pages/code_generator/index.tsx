import { MainContainer } from "components/common";
import Head from "next/head";
import { PageContainer } from "styles";
import { StyledCode } from "pages/styles";
import Reference from "components/common/Reference";

interface Props {}

export default function Code_generator({}: Props) {
  return (
    <MainContainer>
      <Head>
        <title>Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1>Code Generator</h1>
        <p>
          Code Generator boosts productivity of software development by
          generating template code through script and command line, to reduce
          the copy and paste work. <br />
          In this repo, we use <a href="http://www.hygen.io/">Hygen</a> to
          generate templates for pages
        </p>
        <h3>Install and Add script to package.json</h3>
        <pre>
          <StyledCode>{`yarn add hygen`}</StyledCode> <br />
          <StyledCode>{`
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",

  "new:component": "hygen new component" // Add here
},
          `}</StyledCode>
        </pre>
        <br />
        <h3>Create template file</h3>
        <p>
          The template file are in <b>index.tsx.ejs.t</b> file format. <br />
          The template variable are printed using syntax
          <b>
            <code>{"<%= %>"}</code>
          </b>
          <br />
          You can also use the built-in helpers by accessing <b>h</b>:
          <h4>Example Code</h4>
          <StyledCode>
            {`
---
to: <%= absPath %>/index.tsx
---
<%
    title = h.inflection.titleize(component_name) 
%>
import { MainContainer } from "components/common";
import Head from "next/head";
import { PageContainer } from "styles";
<%- need_style_file ? \`import { StyledCode } from "./styles"\` : null %>

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
            {\`-- some code---\`}
          </StyledCode>
        </pre>
      </PageContainer>
    </MainContainer>
  );
}
            
            `}
          </StyledCode>
        </p>
        <br />

        <h3>Config file for the template</h3>
        <p>
          Each Template can have a config file to further customize the code
          generation
          <br />
          This is a configuration file for an interactive prompt that asks you
          some questions when executed. You can customize whatever you want in
          this file.
        </p>
        <StyledCode>
          {`
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "page_name",
        message: "What is the page name? (format example: service_worker)",
      },
      {
        type: "confirm",
        name: "need_style_file",
        message: "Do you need style file",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { page_name, need_style_file } = answers;
      const component_name = page_name
        .replace(/^\w/g, (v) => v.toUpperCase())
        .replace(/-\w/g, (value) => value.toUpperCase().slice(1));
      const absPath = \`pages/$\{page_name\}\`;
      return { ...answers, absPath, component_name, need_style_file };
    });
  },
};

          `}
        </StyledCode>
        <h3>Execute Hygen</h3>
        <img width="600" src="code_generator_example.png" />
        <br />

        <Reference
          items={[
            {
              name: "Hygen Template",
              href: "http://www.hygen.io/docs/templates",
            },
            {
              name: "Hygen Tutorial From Medium",
              href: "https://betterprogramming.pub/create-react-components-using-hygen-687be39a6913",
            },
            {
              name: "Hygen Interactive Prompt",
              href: "https://github.com/jondot/hygen/issues/35",
            },
            {
              name: "Hygen built-in helpers Inflection",
              href: "https://github.com/jondot/hygen/issues/35",
            },
          ]}
        />
      </PageContainer>
    </MainContainer>
  );
}
