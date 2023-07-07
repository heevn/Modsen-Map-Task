import { FavBarWrapper, FavPlacesWrapper, SearchWrapper, ContentWrapper, CloseImg } from "./styled";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Place from "../Place";
import ArrowLeft from "../../assets/ArrowLeft.svg";

export default function FavBar({ setFavBarShown, isOpen }) {
  return (
    <FavBarWrapper open={!isOpen}>
      <ContentWrapper>
        <SearchWrapper>
          <TextField 
            id="input-with-icon-textfield"
            color="info"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
                ),
              }}
          > 
          </TextField>
          Избранное:
        </SearchWrapper>
        <FavPlacesWrapper>
          <Place />
          <Place />
        </FavPlacesWrapper>
      </ContentWrapper>
      <CloseImg alt={"asdasdasd"} src={ArrowLeft} onClick={() => setFavBarShown(false)}/>  
    </FavBarWrapper>
  );
}
