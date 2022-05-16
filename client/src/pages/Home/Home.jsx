import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import {
  Container,
  ImgContainer,
  InfoContainer,
  Wrapper,
} from "./HomeElements";
import iphoneOne from "https://github.com/granulatedsugar/Milky/blob/master/client/src/assets/images/iphoneOne.png";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Wrapper>
        <InfoContainer></InfoContainer>
        <ImgContainer>
          <img src={iphoneOne} alt="iphone" />
        </ImgContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
