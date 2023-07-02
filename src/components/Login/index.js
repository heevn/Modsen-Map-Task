import { TextField, Button, Container } from "@mui/material"
import { ButtonWrapper, LoginWrapper } from "./styled"
import { NavLink } from 'react-router-dom'
import { MAP_ROUTE } from "../utils/consts"
import { useContext } from "react"
import { Context } from "../.."
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default function Login() {
    const {auth} = useContext(Context);
    const provider = new GoogleAuthProvider();
    const login = async () => {
        await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <Container>
            <LoginWrapper>
                <TextField id="outlined-basic" label="Username or email" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <ButtonWrapper>
                    <NavLink to={MAP_ROUTE}>
                        <Button onClick={login} variant="contained">Login</Button>
                    </NavLink>
                </ButtonWrapper>
            </LoginWrapper>
        </Container>
    )
}