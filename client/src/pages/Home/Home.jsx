import React from "react";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import {
  Container,
  Header,
  ImgContainer,
  Info,
  InfoContainer,
  StyledButton,
  Title,
  Wrapper,
  ButtonWrapper,
  StyledButtonThreeD,
  StyledButtonNotThreeD,
} from "./HomeElements";
import iphoneOne from "../../assets/images/iphoneOne.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Wrapper>
        <ImgContainer>
          <img src={iphoneOne} alt="iphone" />
        </ImgContainer>
        <InfoContainer>
          <Header>LOREM IPSUM DOLOR</Header>
          <Title>Lorem Ipsum Dolor Sit</Title>
          <Info>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            voluptatem deserunt ullam molestiae doloribus laborum molestias.
          </Info>
          <ButtonWrapper>
            <StyledButton name="active">LOREM IPSUM DOLOR</StyledButton>
            <StyledButton>SIT</StyledButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <StyledButtonNotThreeD>
              <ArrowBackIosNewIcon />
            </StyledButtonNotThreeD>
            <StyledButtonThreeD>
              <ArrowForwardIosIcon />
            </StyledButtonThreeD>
          </ButtonWrapper>
        </InfoContainer>
      </Wrapper>
      <Card />
    </Container>
  );
};

export default Home;
