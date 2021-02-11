import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { BsDownload } from "react-icons/bs";
const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li onClick={props.handleNavbar}>
            <Link href="/#contact">Contact</Link>
          </li>
          <li onClick={props.handleNavbar}>
            <Link href="/#experience">Experience</Link>
          </li>
          <li onClick={props.handleNavbar}>
            <Link href="/#projects">Projects</Link>
          </li>

          <li
            onClick={props.handleNavbar}
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: "10px" }}>
              <BsDownload size={"2rem"} />
            </span>

            <a
              href="https://drive.google.com/file/d/1MUK1s3-5dOBPK1DV4mytV95m_Pk9bie0/view"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Resume
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background-color: var(--background-color-light);
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: var(--box-shadow);
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
    padding-bottom: 15px;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: var(--text-color-secondary);
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
