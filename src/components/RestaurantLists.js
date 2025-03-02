import RestaurantItem, {restaurantItemPromoted} from "./RestaurantItem";
import { Link } from "react-router-dom";
const RestaurantLists = (props) => {
  const { restaurantLists } = props;
  const PromotedRestaurantItem = restaurantItemPromoted(RestaurantItem);
  return (
    <div className="restaurants___container flex flex-wrap justify-center mt-7 dark:text-white">
      {restaurantLists?.map((restaurant) => {
        const { id, isOpen } = restaurant?.info;
        console.log(restaurant?.info)
        return <Link className="res__card_link" key={id} to={`/restaurant/${id}`}>
          {
            !isOpen?   <RestaurantItem restaurant={restaurant} /> : <PromotedRestaurantItem restaurant={restaurant}/>
          }
         
          </Link>;
      })}
    </div>
  );
};

export default RestaurantLists;
