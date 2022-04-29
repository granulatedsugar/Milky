import React from "react";
import {
  Container,
  Logo,
  NavLink,
  StyledButton,
  Wrapper,
  Left,
  Center,
  Right,
  StyledButtonThreeD,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>MILKY</Logo>
        </Left>
        <Center>
          <NavLink>HOME</NavLink>
          <NavLink>SHOP</NavLink>
          <NavLink>ABOUT</NavLink>
          <NavLink>CONTACT</NavLink>
        </Center>
        <Right>
          <StyledButton>SIGN IN</StyledButton>
          <StyledButtonThreeD>SIGN UP</StyledButtonThreeD>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
