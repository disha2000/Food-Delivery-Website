import { MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { getMenuItemsDeep } from "../utils/helper";

const useRestaurantMenu = ( resId ) => {
  const [data, setData] = useState({
    restaurantBasicInfo: {},
    restaurantMenuData: [],
    menuCategories: [],
    error: null,
    loading: true,
  });

  const url = `${MENU_URL}${resId}`;
  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(url);
        const _data = await response.json();
        const {
          id,
          name,
          isOpen,
          cuisines,
          avgRating,
          costForTwoMessage,
          sla,
        } = _data?.data?.cards[2]?.card?.card?.info;
        console.log(_data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards)
        const _restaurantMenu = getMenuItemsDeep(
          _data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards
        );

        const allRestaurantMenu = _data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards;

        const menuCategories = allRestaurantMenu.filter((_restaurantMenu) => _restaurantMenu?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        console.log(menuCategories)
        setData((prevData) => {
          return {
            ...prevData,
            restaurantBasicInfo: {
              id,
              name,
              isOpen,
              cuisines,
              avgRating,
              costForTwoMessage,
              sla,
            },
            restaurantMenuData: _restaurantMenu,
            menuCategories,
            loading: false,
          };
        });
      } catch (error) {
        setData((prevData) => {
          return {
            ...prevData,
            error: error,
            loading:false
          };
        });
      }
    };
    fetchRestaurantData();
  }, []);
  console.log(data)
  return data;
};
export default useRestaurantMenu;
