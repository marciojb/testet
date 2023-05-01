import App from './App'
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact"
import Skincare from './routes/SkinCare/Skincare';
import Home from './routes/Home/Home';
import Blog from './routes/Blog/Blog';
import Aromaterapia from './routes/Aromaterapia/Aromaterapia';
import SobreNos from './routes/SobreNos/SobreNos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "/auroraorganic/blog",
    element: <Blog/>,
  },
  {
    path: "/auroraorganic/skincare",
    element: <Skincare/>,
  },
  
  {
    path:"/auroraorganic/aromaterapia",
    element:<Aromaterapia/>  
  },
  {
    path:"/auroraorganic",
    element:<Home/>  
  },
  
  {
    path:"/auroraorganic/sobre-nos",
    element:<SobreNos/>  
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);