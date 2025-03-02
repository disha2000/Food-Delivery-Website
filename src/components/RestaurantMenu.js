import { useMemo, useState, useMemo } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../CustomHook/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const [isVegCheck, setIsVegCheck] = useState(false);
  const [isNonVegCheck, setIsNonVegCheck] = useState(false);
  const { resId } = useParams();

  const {
    restaurantBasicInfo,
    restaurantMenuData: restaurantMenu,
    error,
    loading: isLoading,
    menuCategories
  } = useRestaurantMenu(resId);

  const filteredResMenu =
    useMemo(() => {
      if (isVegCheck) {
        return restaurantMenu.filter((menuItem) => menuItem?.card?.info?.isVeg);
      }
      if (isNonVegCheck) {
        return restaurantMenu.filter(
          (menuItem) => !menuItem?.card?.info?.isVeg
        );
      }
      return restaurantMenu;
    }, [restaurantMenu, isVegCheck, isNonVegCheck]) || [];

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="restaurant_menu__container mt-[80] p-4 flex justify-center dark:text-white dark:bg-gray-900">
      <div className="inner__container w-[50%]">
        <h1 className="font-bold text-2xl">{restaurantBasicInfo.name}</h1>

        <div className="basic__info border-1 border-solid border-gray-300 px-2.5 py-6 rounded-2xl shadow-xl shadow-gray-300 my-5 dark:shadow-lg">
          <h4 className="mb-1 font-semibold text-sm">
            ⭐️ {restaurantBasicInfo.avgRating}
          </h4>
          <h4 className="mb-1 font-semibold text-sm">{restaurantBasicInfo.costForTwoMessage}</h4>
          <p className="text-orange-700 text-md font-medium underline italic mb-2  text-sm">{restaurantBasicInfo?.cuisines?.join(",")}</p>
          <h3 className="font-semibold text-sm">{restaurantBasicInfo?.sla?.slaString}</h3>
        </div>
        <div className="menu__filter">
          <input
            type="checkbox"
            checked={isVegCheck}
            onChange={(e) => {
              setIsNonVegCheck(false);
              setIsVegCheck(e.target.checked);
            }}
          />
          <label className="font-bold ml-2 mr-15 ">Veg</label>
          <input
            className="mr-3"
            type="checkbox"
            checked={isNonVegCheck}
            onChange={(e) => {
              setIsNonVegCheck(e.target.checked);
              setIsVegCheck(false);
            }}
          />
          <label className="font-bold">NonVeg</label>
        </div>
        <div className="menu__lists">
          <h2 className="font-medium text-center text-gray-400">-- MENU --</h2>
          {
            menuCategories.map((category) => {
              const {categoryId} = category?.card?.card;
              return <MenuCategory category={category} key={categoryId} isVegCheck={isVegCheck} isNonVegCheck={isNonVegCheck}/>
            })
          }
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
