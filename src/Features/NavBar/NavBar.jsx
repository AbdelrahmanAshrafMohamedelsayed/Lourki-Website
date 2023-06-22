import { Link } from "react-router-dom";
import { Container, Container1, Flex, Links, Logo } from "./NavBar.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../Assets/logo.png";
import { useState } from "react";
const NavBar = () => {
  const [ShowList, setShowList] = useState(false);
  return (
    <Container1>
      <Container>
        <Flex>
          <Logo src={logo} alt="logo" />
          <Links open={ShowList}>
            <span
              onClick={() => {
                setShowList(!ShowList);
              }}
            >
              <GiHamburgerMenu />
            </span>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Links>
        </Flex>
      </Container>
    </Container1>
  );
};

export default NavBar;
