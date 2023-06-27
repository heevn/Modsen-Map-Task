import { LOGIN_ROUTE, MAP_ROUTE } from "./utils/consts"
import Map from "./Map/index"
import Login from "./Login/index"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login />
    }
]

export const privateRoutes = [
    {
        path: MAP_ROUTE,
        Component: <Map />
    }
]