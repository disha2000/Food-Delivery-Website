import RestaurantItem from "./RestaurantItem";
import { RESTUARANT_LISTS } from "../utils/mockData";

const RestaurantLists = () => {
  return (
    <div className="restaurants___container">
      {RESTUARANT_LISTS.map((restaurant) => {
        const { id } = restaurant.info;
        return <RestaurantItem key={id} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default RestaurantLists;
