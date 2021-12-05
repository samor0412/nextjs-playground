import { blue, grey, paleBlue, pink } from "constants/colors";
import React, { Ref, RefObject, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "components/common/Button";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
`;

const Menu = styled.div<{ ref: RefObject<HTMLDivElement> }>`
  width: 20vw;
  border-right: solid 0.5px ${pink};
  position: relative;
  overflow: hidden;
  transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Nav = styled.div`
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
  width: 34px;
  height: 34px;
  position: absolute;
  top: 40px;
  right: -34px;
  background-color: ${grey};
  color: ${paleBlue};
  font-weight: bold;
  border-radius: 0 4px 4px 0;
`;

const ArrowIcon = styled.div<{ isMenuOpen: boolean }>`
  position: relative;
  width: 10px;
  height: 10px;
  border-color: ${paleBlue};
  border: solid;
  border-width: 2px 2px 0 0;
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `transform: rotate(-135deg);left: 2.5px;`
      : `transform: rotate(45deg);right: 2.5px;`};
`;

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const toogleMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.width = isMenuOpen ? "0vw" : "20vw";
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <Menu ref={menuRef}>
        <Nav>
          <Link href="/">
            <NavItem>Home</NavItem>
          </Link>
          <Link href="/static-page-generation">
            <NavItem>Static Page Generation</NavItem>
          </Link>
        </Nav>
      </Menu>
      <ToogleButton onClick={toogleMenu}>
        <ArrowIcon isMenuOpen={isMenuOpen} />
      </ToogleButton>
    </Container>
  );
};

export default SideMenu;
