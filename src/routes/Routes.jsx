import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch("https://dragon-news-server-one-roan.vercel.app/news");
        },
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: async ({ params }) => {
          return fetch(
            `https://dragon-news-server-one-roan.vercel.app/category/${params.id}`
          );
        },
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://dragon-news-server-one-roan.vercel.app/news/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
