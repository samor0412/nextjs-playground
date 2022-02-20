import { MainContainer } from "components/common";
import Head from "next/head";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { PageContainer, YellowNote, Tag1 } from "styles";
import { useEffect, useState } from "react";
import { StyledCode } from "pages/styles";
interface Props {}

const DynamicComponent = dynamic(() => import("./DynamicContent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const _map = () =>
  import("lodash/map").then(({ default: mapLodash }) =>
    mapLodash({ a: 1, b: 2 }, (value) => value).join(", ")
  );

const DynamicImport = () => {
  const [count, setCount] = useState(1);
  const [mapResult, setMapResult] = useState("");

  const onClickMap = async () => {
    const result = await _map();
    setMapResult(result);
  };

  return (
    <MainContainer>
      <Head>
        <title>Dynamic Import</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <h1>Dynamic Import</h1>
        <p>
          <h3>Example</h3>
          The content below is loaded dynamically. Please use slow network in
          Developer Tool Network Tab
          <br />
          <br />
          <DynamicComponent />
        </p>
        <br />
        <p>
          <h3>During dynamic loading, react component is not interactive.</h3>
          Try to click the button below, the setCount doesn't work
          <br />
          Count: {count}
          {"  "}
          <button onClick={() => setCount(count + 1)}>Add Count</button>
        </p>
        <br />
        <p>
          <h3>Type of dynamic import</h3>
          <ul>
            <li>Component</li>
            <li>Script</li>
            <li>3P Library</li>
          </ul>
        </p>
        <br />
        <p>
          <h3>Code sample</h3>
          <h4>Load 3P library</h4>
          <StyledCode>
            {`
const _map = () =>
  import("lodash/map").then(({ default: mapLodash }) =>
    mapLodash({ a: 1, b: 2 }, (value) => value).join(", ")
  );
					 `}
          </StyledCode>
          <br />
          <br />
          The Result: {mapResult} <button onClick={onClickMap}>Run</button>
          <h4>Dynamic Rendering</h4>
          <StyledCode>
            {`
const DynamicComponent = dynamic(() => import("./DynamicContent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
					 `}
          </StyledCode>
          <br />
          <br />
          The Result: Shown at the top
        </p>
        <br />
        <p>
          <h3>Misc</h3>
          <ul>
            <li>TTFB: Time to First Byte</li>
            <li>FCP: First Content Paint</li>
            <li>LCP: Large Content Paint</li>
            <li>TTI: Time to Interactive</li>
          </ul>
        </p>
        <br />
        <p>
          <h3>Reference</h3>
          <ul>
            <li>
              <a href="https://nextjs.org/docs/advanced-features/dynamic-import#with-custom-loading-component">
                https://nextjs.org/docs/advanced-features/dynamic-import#with-custom-loading-component
              </a>
            </li>
            <li>
              <a href="https://thewebdev.info/2021/02/03/how-to-fix-a-state-that-is-not-updating-when-using-react-state-hook-in-setinterval/">
                https://thewebdev.info/2021/02/03/how-to-fix-a-state-that-is-not-updating-when-using-react-state-hook-in-setinterval/
              </a>
            </li>
          </ul>
        </p>
      </PageContainer>
    </MainContainer>
  );
};

export default DynamicImport;
