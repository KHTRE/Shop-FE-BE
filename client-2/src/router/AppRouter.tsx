import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
  // const {user} = useContext(Context)
  // console.log(user)

  const user = {
    isAuth: true,
  };

  return (
    <Routes>
      {user.isAuth && privateRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}

    {publicRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
    </Routes>
  );
};

export default AppRouter;