import RestaurantLists from "./RestaurantLists";
import { RESTUARANT_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const MainHome = () => {
  const [restaurantLists, setRestaurantLists] = useState([]);

  useEffect(() => {
    fetchRestuarantsData();
  }, []);
  fetchRestuarantsData = async () => {
    const response = await fetch(RESTUARANT_URL);
    const results = await response.json();
    const _restaurantsLists =
      results.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestaurantLists(_restaurantsLists);
  };
  return (
    <div className="main__container">
      <div className="filter__section">
        <button
          className="toprated_filter"
          onClick={() => {
            /* 1 .filtering restaurantLists based on the top rated restaurants
             2. the above 4.0 rated restaurants comes in top rated restaurants
             */
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
