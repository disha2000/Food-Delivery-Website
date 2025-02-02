import RestaurantLists from "./RestaurantLists";
import { RESTUARANT_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useFetch from "../CustomHook/useFetch";

const MainHome = () => {
  const [restaurantLists, setRestaurantLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchtext] = useState("");
  // let nonState = "sdsd"
  const [isLoading, error, data] = useFetch(RESTUARANT_URL);
  const [filterdRestaurants, setFilteredRestaurants] = useState([]);

  // useEffect(() => {
  //   fetchRestuarantsData();
  // }, []);

  useEffect(() => {
    if (!isLoading) {
      setLoading(isLoading);
      const _restaurantsLists =
        data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      console.log(_restaurantsLists);
      setRestaurantLists(_restaurantsLists);
      setFilteredRestaurants(_restaurantsLists);
    }
  }, [isLoading]);

  // fetchRestuarantsData = async () => {
  //   const response = await fetch(RESTUARANT_URL);
  //   const results = await response.json();
  //   const _restaurantsLists =
  //     results.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants || [];
  //   const _loading = false;
  //   setLoading(_loading);
  //   setRestaurantLists(_restaurantsLists);
  // };
  return (
    <div className="main__container">
      <div className="filter__section">
        <div className="search_section">
          <input
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            onClick={() => {
              const filterdRestaurants = restaurantLists.filter((restaurant) =>
                restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim())
              );
              setFilteredRestaurants(filterdRestaurants);
            }}
          >
            Search
          </button>
        </div>
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
      {loading ? (
        <Shimmer />
      ) : (
        <RestaurantLists restaurantLists={filterdRestaurants} />
      )}
    </div>
  );
};

export default MainHome;
