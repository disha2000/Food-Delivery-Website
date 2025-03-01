import nonveg from "../../public/image copy.png";
import veg from "../../public/image.png";
import { MENU_IMAGE_URL } from "../utils/constants";

const RestaurantMenuItem = ({ menuItem }) => {
  const { id, name, description, imageId, price, isVeg, defaultPrice } =
    menuItem;
  return (
    <div className="menu__item flex justify-between my-5 p-5 border-1 border-gray-200 rounded-3xl">
      <div className="item__info">
         <img className="food__type w-[20] h-[20]" src={isVeg ? veg : nonveg} />
        <h3 className="name font-extrabold py-3 pr-1">{name}</h3>
        <h4 className="price">&#8377;{price / 100 || defaultPrice / 100}</h4>
        <p className="description text-gray-500 pr-1 text-sm">{description}</p>
      </div>
      <img
      className="w-[150] h-[150] rounded-2xl cursor-pointer"
        src={`${MENU_IMAGE_URL}${imageId}`}
        alt="menu image"
      />
    </div>
  );
};
export default RestaurantMenuItem;
