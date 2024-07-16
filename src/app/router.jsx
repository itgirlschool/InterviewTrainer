import { createBrowserRouter } from "react-router-dom";
import {
  RootLayout,
  Home,
  LoginIn,
  SignIn,
  ResetPassword,
  ContentLesson,
  Error,
  GradingFirst,
  GradingSecond,
  GradingThird,
  Instructions,
  Profile,
} from "../Pages";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginIn />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "contentlesson",
        element: <ContentLesson />,
      },
      {
        path: "gradingfirst",
        element: <GradingFirst />,
      },
      {
        path: "gradingsecond",
        element: <GradingSecond />,
      },
      {
        path: "gradingthird",
        element: <GradingThird />,
      },
      {
        path: "instructions",
        element: <Instructions />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
    errorElement: <Error />,
  },
]);
