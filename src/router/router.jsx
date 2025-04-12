import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Sports from "../pages/Sports/Sports";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import StakeSetting from "../pages/StakeSetting/StakeSetting";
import InPlay from "../pages/InPlay/InPlay";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <App />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sports",
          element: <Sports />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        {
          path: "/in-play",
          element: <InPlay />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    },
    {
      path: "/edit-stake",
      element: <StakeSetting />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
