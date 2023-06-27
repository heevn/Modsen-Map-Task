import { TextField, Button, Container } from "@mui/material"
import { ButtonWrapper, LoginWrapper } from "./styled"
import { NavLink } from 'react-router-dom'
import { MAP_ROUTE } from "../utils/consts"

export default function Login() {
    return (
        <Container>
            <LoginWrapper>
                <TextField id="outlined-basic" label="Username or email" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <ButtonWrapper>
                    <NavLink to={MAP_ROUTE}>
                        <Button variant="contained">Login</Button>
                    </NavLink>
                </ButtonWrapper>
            </LoginWrapper>
        </Container>
    )
}