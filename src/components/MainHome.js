import RestaurantLists from "./RestaurantLists";
import { RESTUARANT_LISTS } from "../utils/mockData";
import { useState } from "react";

const MainHome = () => {
  const [restaurantLists, setRestaurantLists] = useState(RESTUARANT_LISTS);
  return (
    <div className="main__container">
      <div className="filter__section">
        <button
          className="toprated_filter"
          onClick={() => {
            // filtering restaurantLists based on the top rated restaurants
            // the above 4.0 rated restaurants comes in top rated restaurants
            const topRatedRestaurants = restaurantLists.filter(
              (restaurant) => restaurant?.info?.avgRating > 4
            );
            setRestaurantLists(topRatedRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <RestaurantLists restaurantLists={restaurantLists} />
    </div>
  );
};

export default MainHome;
