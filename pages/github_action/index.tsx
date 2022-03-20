import { MainContainer } from "components/common";
import Head from "next/head";
import { PageContainer, StyledCode } from "styles";

interface Props {}

export default function Github_action({}: Props) {
  return (
    <MainContainer>
      <Head>
        <title>Github Action</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1>Git Action</h1>
        <h3>Background</h3>
        <p>
          GitHub Actions makes it easy to automate all your software workflows,
          now with world-class CI/CD. Build, test, and deploy your code right
          from GitHub
        </p>
        <h3>Create workflow for push to main</h3>
        <p>
          When there is a new commit in main branch, we want to deploy the code
          to web server. <br />
          To do this, We can create a github action to run workflow on push
          event
        </p>
        <pre>
          <StyledCode>{`
  name: Deploy
    on:
      push:
        branches: [main]
          `}</StyledCode>
        </pre>
        <h3>Register a free hosting account</h3>
        <p>
          This website is hosted in Infinity Free, which is a static hosting
          provider.
          <br />
          Therefore, the code has to build as static html file. To do so, we
          need to export the nextjs repo and deploy to server through FTP
        </p>
        <pre>
          <StyledCode>{`
  // package.json
  "scripts": {
    "build:export": "next build && next export",
  },

  // git workflow
    - name: Build
    run: |
      yarn
      yarn add -D webpack-cli
      yarn build:export
          `}</StyledCode>
        </pre>
        <h3>Deploy with FTP</h3>
        <p>
          As Infinity only support FTP deploy, we use{" "}
          <a href="https://github.com/marketplace/actions/ftp-deploy">
            FTP Deploy
          </a>
          Action in Github action
        </p>
        <StyledCode>{`
  // git workflow
  - name: FTP
    uses: SamKirkland/FTP-Deploy-Action@4.3.0
    with:
      server: \${{ secrets.INFINITY_FREE_HOST }}
      username: \${{ secrets.INFINITY_FREE_FTP_USER_NAME }}
      password: \${{ secrets.INFINITY_FREE_FTP_PW }}
      protocol: ftps
      local-dir: ./out/
      server-dir: ./htdocs/
      exclude: |
        **/.git*
        **/.git*/**
        **/out/**
        **/.next/**
          `}</StyledCode>
        <h3>Full Code</h3>
        <pre>
          <StyledCode>{`
  name: Deploy

  on:
    push:
      branches: [main]
    # pull_request:
    #   branches: [ main ]
  
  jobs:
    build:
      runs-on: ubuntu-latest
  
      strategy:
        matrix:
          node-version: [16.x]
  
      steps:
        - uses: actions/checkout@v2
  
        - name: Use Node.js \${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: \${{ matrix.node-version }}
  
        - name: Build & Deploy
          run: |
            yarn
            yarn add -D webpack-cli
            yarn build:export
  
        - name: FTP
          uses: SamKirkland/FTP-Deploy-Action@4.3.0
          with:
            server: \${{ secrets.INFINITY_FREE_HOST }}
            username: \${{ secrets.INFINITY_FREE_FTP_USER_NAME }}
            password: \${{ secrets.INFINITY_FREE_FTP_PW }}
            protocol: ftps
            local-dir: ./out/
            server-dir: ./htdocs/          
          `}</StyledCode>
        </pre>
      </PageContainer>
    </MainContainer>
  );
}
