import { Admin } from "../pages/Admin"

export enum ROUTES {
  Home = "/",
  Admin = "/admin",
  Login = '/login',
  Registration = '/registration',
  Basket = '/basket',
  Device = '/device',
}

export const privateRoutes = [
  {
      path: ROUTES.Admin,
      Component: Admin
  },
  {
      path: ROUTES.Basket,
      Component: Admin
      // Component: Basket
  },
]

export const publicRoutes = [
  {
    path: ROUTES.Home,
    Component: Admin
    // Component: Shop
  },
  {
    path: ROUTES.Login,
    Component: Admin
    // Component: Auth
  },
  {
    path: ROUTES.Registration,
    Component: Admin
    // Component: Auth
  },
  {
    path: ROUTES.Device,
    Component: Admin
    // Component: DevicePage
  },
]
