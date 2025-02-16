import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import Error404 from "../pages/404";

export const routeList = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },
  {
    path: "/profile",
    name: "Profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
  },
  {
    path: "/games",
    name: "Games",
    element: <div>Let&apos;s have fun</div>,
  },
];

export const router = createBrowserRouter(routeList);
