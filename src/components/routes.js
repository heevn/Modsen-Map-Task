import { LOGIN_ROUTE, MAP_ROUTE } from "./utils/consts";
import Map from "./Map/index";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Map />,
  },
];

export const privateRoutes = [
  {
    path: MAP_ROUTE,
    Component: <Map />,
  },
];
