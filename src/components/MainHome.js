import RestaurantLists from "./RestaurantLists";
import { RESTUARANT_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useFetch from "../CustomHook/useFetch";
import test from "../CustomHook/test";

const MainHome = () => {
  const [restaurantLists, setRestaurantLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchtext] = useState("");
  const [isLoading, error, data] = useFetch(RESTUARANT_URL);
  const [filterdRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    if (!isLoading) {
      setLoading(isLoading);
      const _restaurantsLists =
        data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantLists(_restaurantsLists);
      setFilteredRestaurants(_restaurantsLists);
    }
  }, [isLoading]);

  const isOnline = test();
  if (!isOnline) {
    return (
      <div className="main__container mt-[80] py-4 px-[10%]">
        Looks like you are offline, please check your internet connection!!!
      </div>
    );
  }
  return (
    <div className="main__container mt-[80] py-4 px-[10%] dark:bg-gray-900">
      <div className="filter__section flex justify-around">
        <div className="search_section flex">
          <input
            className="bg-white border-1 border-gray-200 px-3 py-0.5 text-sm rounded-md font-medium foucs:outline-solid"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className="bg-orange-300 py-1 px-2 ml-1.5 rounded-lg cursor-pointer text-sm font-medium outline-1 outline-orange-500"
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
          className="toprated_filter ml-3.5 bg-orange-300 py-1 px-2  rounded-lg cursor-pointer text-sm font-medium outline-1 outline-orange-500"
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
