import { useEffect, useMemo, useState, useMemo } from "react";
import Shimmer from "./Shimmer";
import nonveg from "../../public/image copy.png";
import veg from "../../public/image.png";
import { useParams } from "react-router-dom";
import { MENU_URL, MENU_IMAGE_URL } from "../utils/constants";

const getMenuItemsDeep = (cards) => {
  let allMenuItems = [];
  cards.map((card) => {
    if (card?.card?.card?.itemCards) {
      allMenuItems = [...card.card.card.itemCards, ...allMenuItems];
    }
  });
  return allMenuItems;
};

const RestaurantMenu = () => {
  const [restaurantBasicInfo, setRestaurantBasicInfo] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVegCheck, setIsVegCheck] = useState(false);
  const [isNonVegCheck, setIsNonVegCheck] = useState(false);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  const fetchRestaurantInfo = async () => {
    const response = await fetch(MENU_URL + resId);
    const restaurantInfo = await response.json();
    setIsLoading(false);
    const { id, name, isOpen, cuisines, avgRating, costForTwoMessage, sla } =
      restaurantInfo?.data?.cards[2]?.card?.card?.info;
    setRestaurantBasicInfo({
      name,
      isOpen,
      cuisines,
      avgRating,
      costForTwoMessage,
      sla,
    });

    const _restaurantMenu = getMenuItemsDeep(
      restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setRestaurantMenu(_restaurantMenu);
  };
  filteredResMenu =
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
    <div className="restaurant_menu__container">
      <div className="inner__container">
        <h1>{restaurantBasicInfo.name}</h1>
        <div className="basic__info">
          <h4>
            {restaurantBasicInfo.avgRating}{" "}
            {restaurantBasicInfo.costForTwoMessage}
          </h4>
          <p>{restaurantBasicInfo?.cuisines?.join(",")}</p>
          <h3>{restaurantBasicInfo?.sla?.slaString}</h3>
        </div>
        <div className="menu__filter">
          <input
            type="checkbox"
            checked={isVegCheck}
            onChange={(e) => {
              console.log("here");
              setIsNonVegCheck(false);
              setIsVegCheck(e.target.checked);
            }}
          />
          <label>Veg</label>
          <input
            type="checkbox"
            checked={isNonVegCheck}
            onChange={(e) => {
              setIsNonVegCheck(e.target.checked);
              setIsVegCheck(false);
            }}
          />
          <label>NonVeg</label>
        </div>
        <div className="menu__lists">
          <h2>-- MENU --</h2>
          {filteredResMenu?.map((menuItem) => {
            const {
              id,
              name,
              description,
              imageId,
              price,
              isVeg,
              defaultPrice,
            } = menuItem?.card?.info;
            return (
              <div className="menu__item" key={id}>
                <div className="item__info">
                  <img className="food__type" src={isVeg ? veg : nonveg} />
                  <h3 className="name">{name}</h3>
                  <h4 className="price">
                    &#8377;{price / 100 || defaultPrice / 100}
                  </h4>
                  <p className="description">{description}</p>
                </div>

                <img
                  src={`${MENU_IMAGE_URL}${imageId}`}
                  alt="menu image"
                  className="item__image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
