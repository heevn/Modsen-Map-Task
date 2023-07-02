import { Button } from "@mui/material"
import { ButtonsWrapper, SideBarWrapper } from "./styled"
import SearchIcon from '@mui/icons-material/Search';
import MappieLogo from "../../Group.svg"

export default function Map() {
    return(
        <SideBarWrapper>
            <img src={MappieLogo} alt="Mappie Logo" width="32px" height="30px"/>
            <ButtonsWrapper>
                <Button variant="contained"><SearchIcon /></Button>
            </ButtonsWrapper>
        </SideBarWrapper>
    )
}