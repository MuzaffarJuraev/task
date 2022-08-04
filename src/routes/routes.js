import { Navigate } from "react-router-dom";

import Home from "../containers/Home";
import Cards from "../views/Cards";
import CardView from "../views/CardView";

import Auth from "../containers/Auth";
import SignIn from "../views/Auth/SignIn";

export const privateRoutes = [
  {
    element: <Home />,
    children: [
      {
        index: true,
        element: <Cards />,
      },
      { path: "/card/:id", element: <CardView /> },
    ],
  },
];

export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "/login", element: <SignIn /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];
