import React, { useState } from "react";
import {
  Container,
  Left,
  Right,
  SubContainer,
  SubTitle,
  Title,
  Top,
  Bottom,
  Wrapper,
  StyledButtonThreeDone,
  StyledButtonThreeDtwo,
  InnerContainer,
} from "./HeroElements";
import Spline from "@splinetool/react-spline";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <InnerContainer>
            <Top>
              <Title>Lorem ipsum dolor sit</Title>
            </Top>
            <Bottom>
              <SubTitle>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                molestias quibusdam beatae.
              </SubTitle>
              <SubContainer>
                <StyledButtonThreeDone>SHOP NOW!</StyledButtonThreeDone>
                <StyledButtonThreeDtwo>
                  <ChevronRightRoundedIcon />
                </StyledButtonThreeDtwo>
              </SubContainer>
            </Bottom>
          </InnerContainer>
        </Left>
        <Right>
          <InnerContainer>
            <Spline scene="https://prod.spline.design/7BYZ1CgMnGYr0Lz3/scene.spline" />
          </InnerContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
