import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PlaceWrapper = styled(Box)`
  display: flex;
  border-radius: 10px;
  border: 3px solid var(--gray-light-light, #C4C4C4);
  padding: 20px 30px 23px 20px;
  width: auto;
`
export const TextImgWrapper = styled(Box)` 
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`

export const ImgWrapper = styled(Box)`
  border-radius: 10px;
  width: 120px;
  height: 99px;
  flex-shrink: 0;
  background-color: #808080;
`