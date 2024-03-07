import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import userContext from "./src/utils/userContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaruntMenu from "./src/components/RestaruntMenu";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

// import Grocery from "./src/components/Grocery";

//chunking
// code splitting
// Dynamic Bundling
// lazy loading
//on demand loading
// dynamic import

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("vijayavedhasekaran");
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <div className="pt-20">
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
