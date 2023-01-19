import { Navigate } from "react-router-dom";
import { Details } from "../views/Details";
import { Home } from "../views/Home/Home";

export const routes = [
  {
    path: "/",
    element: <Navigate to={"/home"}></Navigate>,
  },
  {
    path:'/home',
    element:<Home></Home>
  },{
    path:'/details',
    element:<Details></Details>
  }
];
