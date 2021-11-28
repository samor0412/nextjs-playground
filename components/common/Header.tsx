import { blue, paleBlue } from "constants/colors";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 0px 24px;
  border-bottom: solid 1px #e4e4e4;
`;

const Logo = styled.h2`
  font-style: italic;
  color: ${blue};
`;

const Header = () => {
  return (
    <Container>
      <Logo>NextJs Playground</Logo>
    </Container>
  );
};

export default Header;
