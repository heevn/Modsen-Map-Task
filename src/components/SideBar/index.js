import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
} from "firebase/auth";
import { ButtonsWrapper, LogWrapper, SideBarWrapper } from "./styled";
import { Button, Avatar, Grow } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MappieLogo from "../../Group.svg";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../../store/auth/auth";

export default function SideBar() {
  const [isShown, setIsShown] = useState(false);
  const auth = getAuth();
  const user = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(logIn({uid: result.user.uid, image: result.user.photoURL}));
      })
      .catch((error) => {});
  };

  const logOutComponent = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        console.log("Sign out succesfully");
      })
      .catch((error) => {});
  };

  return (
    <SideBarWrapper>
      <ButtonsWrapper>
        <img src={MappieLogo} alt="Mappie Logo" width="32px" height="30px" />
        <Button variant="contained">
          <SearchIcon />
        </Button>
        <Button variant="outlined" color="error">
          <BookmarkIcon />
        </Button>
      </ButtonsWrapper>
      <Avatar
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        src={user.image || ""}
        alt="e"
      ></Avatar>
      <LogWrapper
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <Grow in={isShown}>
          <Button variant="contained" color="primary" onClick={login}>
            Login
          </Button>
        </Grow>
        <Grow in={isShown}>
          <Button variant="contained" color="primary" onClick={logOutComponent}>
            Logout
          </Button>
        </Grow>
      </LogWrapper>
    </SideBarWrapper>
  );
}
