import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};


/* Decalring the all the routes 
1. / -> Home
2. /about -> About
3. /contactus -> Contact

- Doing all the configuration using createBrowserRouter it takes list of all routing path with corresponding element
- Adding childern to main / path 
  - As our header and footer will going to same and in that we are replacing <Outlet/> with the <MainHone/>, <About/> and <ContactUs> based on the path

*/


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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouterConfiguration} />);
