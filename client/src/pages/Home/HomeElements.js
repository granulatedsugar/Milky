import styled from "styled-components";
import { styled as StyledMd } from "@mui/material/styles";
import { Button } from "@mui/material";
import { colors } from "../../constants/colors.js";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InfoContainer = styled.div``;
export const ImgContainer = styled.div``;
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
