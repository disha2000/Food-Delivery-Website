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
    <div className="restaurant_card w-[250] m-3 border-1 border-gray-300 p-2.5 rounded-2xl">
      <img
        className="rounded-2xl"
        style={restaurantImageStyle}
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="restuarant logo"
      />
      <div className="res-details mt-2">
        <h3 className="font-black py-1 text-lg">{name}</h3>
        <h3 className="font-semibold">{cuisines.join(", ")}</h3>
        <h4 className="py-2"> <span className="pink text-md text-white p-0.3 ">⭐️</span>{avgRating}<span className="pl-1">{costForTwo}</span></h4>
        
      </div>
    </div>
  );
};


export const restaurantItemPromoted = (Component) => {
  return (props) => {
    return (<div className="relative">
        <label className="absolute bg-black text-amber-50  rounded-lg font-medium text-xs px-2.5 py-1 z-10 bottom-0 right-0 mr-3 dark:bg-white dark:text-black">Open</label>
        <Component {...props}/>
    </div>)
  
  }
}
export default RestaurantItem;
