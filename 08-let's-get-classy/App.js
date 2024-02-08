import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaruntMenu from "./src/components/RestaruntMenu";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      {/* {/* * if path = / */}
      {/* <Body /> */}
      {/* if path = /aboutus */}
      {/* <AboutUs /> */}
      {/* if path = /contactus */}
      {/* <ContactUs */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaruntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
