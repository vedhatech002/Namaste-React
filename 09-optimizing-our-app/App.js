import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaruntMenu from "./src/components/RestaruntMenu";
// import Grocery from "./src/components/Grocery";

//chunking
// code splitting
// Dynamic Bundling
// lazy loading
//on demand loading
// dynamic import

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
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
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <>
                <h1>Loading...</h1>
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
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
