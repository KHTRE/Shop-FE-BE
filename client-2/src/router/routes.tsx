import { Admin } from "../pages/Admin"
import { Auth } from "../pages/Auth"
import { Basket } from "../pages/Basket"
import { Device } from "../pages/Device"
import { Shop } from "../pages/Shop"

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
      Component: Basket
  },
]

export const publicRoutes = [
  {
    path: ROUTES.Home,
    Component: Shop
  },
  {
    path: ROUTES.Login,
    Component: Auth
  },
  {
    path: ROUTES.Registration,
    Component: Auth
  },
  {
    path: ROUTES.Device,
    Component: Device
  },
]
