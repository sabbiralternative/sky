import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Sports from "../pages/Sports/Sports";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

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
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
