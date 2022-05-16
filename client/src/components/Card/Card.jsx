import React from "react";
import { card } from "../../Data/data";
import {
  Container,
  Image,
  ImageContainer,
  Wrapper,
  Title,
  StyledButtonThreeD,
} from "./CardElements";

const Card = () => {
  return (
    <Container>
      <Wrapper>
        {card.map((item) => (
          <ImageContainer>
            <Image src={item.img} />
            <Title>{item.title}</Title>
            <StyledButtonThreeD>LOREM IPSUM</StyledButtonThreeD>
          </ImageContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Card;
