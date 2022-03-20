import { blue, grey, paleBlue, pink } from "constants/colors";
import React, { Ref, RefObject, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import Button from "components/common/Button";

interface NavItemProps {
  href: string;
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;

  a {
    text-decoration: none;
  }
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

const StyledNavItem = styled.div`
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

const A = styled(Link)<{ href: string; pathname: string }>`
  ${({ href, pathname }) =>
    href === pathname ? `display: block !important;` : ""}
`;

const Expandable = styled.div`
  /* > a:not(:first-child) {
    display: none;
  }

  :hover > a:not(:first-child) {
    display: block;
  } */

  > a:not(:first-child) {
    display: block;
    margin-left: 20px;
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
const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const { pathname } = useRouter();

  return (
    <A href={href} pathname={pathname}>
      <StyledNavItem>{children}</StyledNavItem>
    </A>
  );
};

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
          {/* use <a> tag instead of <Link> tag because sw service worker cache api can't handle routing */}
          <NavItem href="/">Home</NavItem>
          <NavItem href="/static_page_generation">
            Static Page Generation
          </NavItem>
          <NavItem href="/dynamic_import">Dynamic Import</NavItem>
          <Expandable>
            <NavItem href="/service_worker">Service Worker</NavItem>
            <NavItem href="/service_worker/fetch_api">Fetch Api</NavItem>
          </Expandable>
          <NavItem href="/code_generator">Code Generator</NavItem>
        </Nav>
      </Menu>
      <ToogleButton onClick={toogleMenu}>
        <ArrowIcon isMenuOpen={isMenuOpen} />
      </ToogleButton>
    </Container>
  );
};

export default SideMenu;
