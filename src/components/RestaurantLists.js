import RestaurantItem from "./RestaurantItem";
import { Link } from "react-router-dom";
const RestaurantLists = (props) => {
  const { restaurantLists } = props;
  return (
    <div className="restaurants___container">
      {restaurantLists?.map((restaurant) => {
        const { id } = restaurant?.info;
        return <Link className="res__card_link" key={id} to={`/restaurant/${id}`}><RestaurantItem restaurant={restaurant} /></Link>;
      })}
    </div>
  );
};

export default RestaurantLists;
