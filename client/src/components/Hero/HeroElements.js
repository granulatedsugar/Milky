import styled from "styled-components";
import { styled as StyledMd } from "@mui/material/styles";
import { Button } from "@mui/material";
import { colors } from "../../constants/colors.js";

export const Container = styled.div`
  background: linear-gradient(180deg, #dd3b74 68%, #bf1d56 32%);
  width: 100%;
  height: 100vh;
  margin: auto;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Left = styled.div`
  flex: 6;
  justify-content: center;
`;

export const Top = styled.div`
  display: flex;
  padding-left: 60px;
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60px;
`;
export const Title = styled.h1`
  font-weight: 900;
  font-size: 120px;
  margin: 10px 0px;
  color: ${colors.textPalette.primary};
`;
export const SubContainer = styled.div``;
export const SubTitle = styled.span`
  font-size: 20px;
  margin-bottom: 30px;
  color: ${colors.textPalette.primary};
  font-weight: 600;
`;
export const Right = styled.div`
  flex: 6;
  justify-content: center;
`;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const StyledButtonThreeDone = StyledMd(Button)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  width: 30%;
  height: 80px;
  line-height: 50px;
  font-weight: 700;
  border-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-image: -webkit-linear-gradient(#fdda60 0%, #ff8d2b 100%);
  background-image: linear-gradient(#fdda60 0%, #ff8d2b 100%);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.28);  
`;

export const StyledButtonThreeDtwo = StyledMd(Button)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  height: 80px;
  line-height: 50px;
  border-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  font-weight: 700;
  background-image: -webkit-linear-gradient(#4dc1d2 0%, #25818f 100%);
  background-image: linear-gradient(#4dc1d2 0%, #25818f 100%);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.28);  
`;
