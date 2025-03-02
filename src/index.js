import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
// const About = lazy(() => import('./components/About'));

const App = () => {
  const themeContext = useContext(ThemeContext);
  // console.log(themeContext)
  const [theme, setTheme] = useState(themeContext.theme);
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme }}>
      <div
        className={`app-container min-h-[100vh] flex justify-between flex-col ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
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
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouterConfiguration} />);
