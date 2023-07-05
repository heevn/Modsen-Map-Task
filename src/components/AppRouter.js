import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { MAP_ROUTE } from "./utils/consts";

export default function AppRouter() {
  //const {auth} = useContext(Context);
  const user = true;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact={true} />
      ))}
      <Route path="*" element={<Navigate to={MAP_ROUTE} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact={true} />
      ))}
      <Route path="*" element={<Navigate to={MAP_ROUTE} replace />} />
    </Routes>
  );
}
