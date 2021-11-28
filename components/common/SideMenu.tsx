import { blue, paleBlue, pink } from "constants/colors";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "components/common/Button";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
`;

const Menu = styled.div`
  width: 20vw;
  border-right: solid 0.5px ${pink};
  position: relative;
  overflow: hidden;
  transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Nav = styled.div<{ ref: any }>`
  padding: 20px 24px;
  max-width: 200px;
`;

const NavItem = styled.div`
  background-color: ${blue};
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  overflow-x: hidden;
  box-sizing: border-box;
  margin: 12px 0;
  cursor: pointer;

  &:hover {
    background-color: ${paleBlue};
    color: #a1a1a1;
  }

  & > a,
  & > a:hover,
  a:focus,
  a:active {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
`;

const ToogleButton = styled(Button)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 40px;
  right: -30px;
  background: linear-gradient(
    to left,
    ${paleBlue} 5%,
    #f0f0f0 20%,
    #fff 50%,
    #f0f0f0 80%,
    ${paleBlue} 95%
  );
`;

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuRef = useRef(null);
  const toogleMenu = () => {
    menuRef.current.style.width = isMenuOpen ? "0vw" : "20vw";
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Menu ref={menuRef}>
        <Nav>
          <Link href="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/about">
            <NavItem>About</NavItem>
          </Link>
        </Nav>
      </Menu>
      <ToogleButton onClick={toogleMenu}>{isMenuOpen ? "<" : ">"}</ToogleButton>
    </Container>
  );
};

export default SideMenu;
