import styled from "styled-components";
import { styled as StyledMd } from "@mui/material/styles";
import { Button } from "@mui/material";

export const Container = styled.div`
  background: linear-gradient(180deg, #bf1d56 66%, #dd3b74 34%);
`;
export const Wrapper = styled.div`
  padding: 0px 50px 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
`;
export const Header = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
`;
export const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  font-weight: 900;
  padding: 0;
  margin: 0;
  padding: 20px 0 20px 0;
`;
export const Info = styled.span`
  font-size: 24px;
  color: #fff;
  font-weight: 500;
  padding: 0px 0 80px 0;
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledButton = StyledMd(Button)`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  padding: 30px;
  margin-right: 20px;
  background-color: transparent;
  border: ${(props) =>
    props.name === "active" ? "3px solid #ff9c30" : "3px solid #d3316a"};
  border-radius: 15px;
  height: 60px;
  
  &:hover {
    color: #fff;
    border: 3px solid #ff9c30;
  } 
`;

export const StyledButtonNotThreeD = StyledMd(Button)`
  color: #fff;
  font-weight: 700;
  margin-top: 80px;
  font-size: 16px;
  padding: 30px;
  margin-right: 20px;
  background-color: #b61c52;
  border: 3px solid #b61c52;
  border-radius: 15px;
  line-height: 50px;
  height: 80px;
  
  &:hover {
    color: #fff;
    border: 3px solid #ff9c30;
  } 
`;

export const StyledButtonThreeD = StyledMd(Button)`
text-decoration: none;
color: #fff;
margin-top: 80px;
padding: 30px;
margin-right: 20px;
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
