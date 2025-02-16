import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
  {
    path: "about",
    element: <div>Hello About</div>,
  },
  {
    path: "profile",
    element: <div>Hello profile</div>,
  },
]);
