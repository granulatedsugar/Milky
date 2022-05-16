import styled from "styled-components";
import { styled as StyledMd } from "@mui/material/styles";
import { Button } from "@mui/material";

export const Container = styled.div`
  background: linear-gradient(180deg, #dd3b74 30%, #bf1d56 70%);
`;
export const Wrapper = styled.div`
  padding: 0px 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
`;

export const Image = styled.img`
  max-width: 300px;
`;

export const StyledButtonThreeD = StyledMd(Button)`
text-decoration: none;
color: #fff;
padding: 30px;
font-size: 20px;
height: 80px;
line-height: 50px;
border-radius: 15px;
font-weight: 700;
background-image: -webkit-linear-gradient(#fdda60 0%, #ff8d2b 100%);
background-image: linear-gradient(#fdda60 0%, #ff8d2b 100%);
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.28);  
}
`;
