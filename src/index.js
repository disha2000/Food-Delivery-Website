import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Footer from './components/Footer'
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))
// const About = lazy(() => import('./components/About'));


const App = () => {
  return (
    <div className="app-container min-h-[100vh] flex justify-between flex-col">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};

const appRouterConfiguration = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: <Suspense><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouterConfiguration} />);
