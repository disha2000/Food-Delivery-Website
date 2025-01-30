import { CDN_URL } from "../utils/constants";

const restaurantImageStyle = {
  width: "250px",
  height: "190px",
};

const RestaurantItem = (props) => {
  const { restaurant } = props;
  const { name, avgRating, cloudinaryImageId, costForTwo, cuisines } =
    restaurant?.info;

  return (
    <div className="restaurant_card">
      <img
        style={restaurantImageStyle}
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="restuarant logo"
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantItem;
