import { Button, Avatar, Grow } from "@mui/material"
import { ButtonsWrapper, LogWrapper, SideBarWrapper } from "./styled"
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MappieLogo from "../../Group.svg"
import { useContext, useState } from "react"
import { Context } from "../.."
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

export default function Map() {
    const [isShown, setIsShown] = useState(false);
    const {auth} = useContext(Context);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState();

    const login = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            setUser(result.user);
            console.log(user);
        }).catch((error) => {

        });
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null);
          }).catch((error) => {
            
          });
    }

    return (
        <SideBarWrapper>
            <ButtonsWrapper>
                <img src={MappieLogo} alt="Mappie Logo" width="32px" height="30px"/>
                <Button variant="contained"><SearchIcon /></Button>
                <Button variant="outlined" color="error"><BookmarkIcon /></Button>
            </ButtonsWrapper>
            <Avatar onMouseEnter={() =>  setIsShown(true)} onMouseLeave={() => setIsShown(false)} src={user?.photoURL} alt="e"></Avatar>
            <LogWrapper onMouseEnter={() =>  setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                <Grow in={isShown}>
                    <Button variant="contained" color="primary" onClick={login}>Login</Button>
                </Grow>
                <Grow in={isShown}>
                    <Button variant="contained" color="primary" onClick={logOut}>Logout</Button>
                </Grow>
            </LogWrapper>
        </SideBarWrapper>
    )
}