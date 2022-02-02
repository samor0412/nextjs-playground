import { blue, paleBlue } from "constants/colors";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Header, SideMenu } from ".";

const FullPageContainer = styled.div`
  & {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 50px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-grow: 1;
`;

const MainContainer: React.FC = ({ children }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <FullPageContainer>
      <Header />
      <Container>
        <SideMenu />
        {children}
      </Container>
    </FullPageContainer>
  );
};

export default MainContainer;
