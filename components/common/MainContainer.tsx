import { blue, paleBlue } from "constants/colors";
import React from "react";
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
