import styled from "styled-components";
import { styled as StyledMd } from "@mui/material/styles";
import { Button } from "@mui/material";
import { colors } from "../../constants/colors.js";

export const Container = styled.div`
  background-color: ${colors.bgPalette.primary};
  margin: auto;
  padding: 10px 0px 0px 0px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;
export const Center = styled.div`
  flex: 7;
  display: flex;
  justify-content: center;
`;
export const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.h1`
  font-weight: 900;
  font-size: 50px;
  color: ${colors.textPalette.primary};
`;
export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.textPalette.primary};
  padding: 0px 50px;
  cursor: pointer;
`;
export const StyledButton = StyledMd(Button)`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  margin-left: 20px;
  background-color: transparent;
  border: 3px solid #d3316a;
  border-radius: 15px;
  width: 30%;
  height: 60px;
  
  &:hover {
    color: #fff;
    border: 3px solid #ff9c30;
  } 
`;

export const StyledButtonThreeD = StyledMd(Button)`
text-decoration: none;
margin-left: 20px;
color: #fff;
font-size: 20px;
width: 40%;
height: 80px;
line-height: 50px;
border-radius: 15px;
font-weight: 700;
background-image: -webkit-linear-gradient(#fdda60 0%, #ff8d2b 100%);
background-image: linear-gradient(#fdda60 0%, #ff8d2b 100%);
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.28);  
}
`;
