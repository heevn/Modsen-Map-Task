import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const SideBarWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 3vw;
  height: 95vh;
  padding: 25px;
  align-items: center;
  row-gap: 40px;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  background-color: white;
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  row-gap: 15px;
  flex-direction: column;
  width: auto;
  align-items: center;
`;

export const LogWrapper = styled(Box)`
  display: flex;
  position: absolute;
  top: 800px;
  left: 8px;
  flex-direction: column;
  row-gap: 5px;
`;
