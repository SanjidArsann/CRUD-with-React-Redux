
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Layout from "../Components/Layout/Layout";
import ViewStudent from "../features/Student/ViewStudent";
import AddStudent from "../features/Student/AddStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/show",
          element:<ViewStudent/>,
        },
        {
          path: "/add",
          element: <AddStudent/>,
        },
      ],
  },
]);

export default router;
