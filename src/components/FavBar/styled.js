import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FavBarWrapper = styled(Box)`
  width: auto;
  display: flex;
  flex-direction: row;
  position: fixed;
  height: 100%;
  left: ${(props) => props.open ? "-420px" : "calc(3vw + 50px)"};
  top: 0;
  z-index: 1;
  transition: left 0.8s ease-in-out;
`;

export const ContentWrapper = styled(Box)`
  background-color: white;
  padding: 25px;
  width: 300px;
  height: 100%;
  box-shadow: 1px 0px 20px 0px #0000001a;
`;

export const CloseImg = styled.img`
  translate: scale(-50%, 0);
  height: 80px;
  border-radius: 0 10px 10px 0;
  background-color: white;
  padding: 8px;
  margin: auto 0;
`;

export const SearchWrapper = styled(Box)`
  display: flex;
  width: fit-content;
  row-gap: 30px;
  flex-direction: column;
  color: var(--gray, #373737);
    font-family: Mont;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

export const FavPlacesWrapper = styled(Box)`
  display: flex;
  border: solid 1px;
  flex-direction: column;
  row-gap: 25px;
`;
