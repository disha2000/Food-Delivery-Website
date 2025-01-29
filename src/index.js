import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainHome from "./components/MainHome";
/*

    Components 
     - Header 
        -- logo
        -- nav-items
          --- Home
          --- About Us
          --- Contact Us
          --- Cart
    - Body 
      -- Search
      -- Resturant container
       -- Resturant 
         --- Image
         --- Name
         --- Rating
         --- Cuisines
         --- Delivery Time
         --- Cost for two
         --- Offers
    -- Footer
        -- Contact Us
        -- About Us
        -- Privacy Policy
        -- Terms and Conditions
        -- Social Media Links

*/

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <MainHome />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
