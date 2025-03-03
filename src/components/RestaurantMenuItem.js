import nonveg from "../../public/image copy.png";
import veg from "../../public/image.png";
import { MENU_IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteItem } from "../store/slices/cartSlice";

const RestaurantMenuItem = ({ menuItem }) => {
  const { id, name, description, imageId, price, isVeg, defaultPrice } =
    menuItem;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const onlyCurrentItem =
    cartItems?.filter((_item) => _item.id === id) || [];
  const handleAddItem = (menuItem) => {
    dispatch(addItems(menuItem));
  };
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <div className="menu__item flex justify-between my-5 p-5 border-1 border-gray-200 rounded-3xl">
      <div className="item__info w-9/12">
        <img className="food__type w-[20] h-[20]" src={isVeg ? veg : nonveg} />
        <h3 className="name font-extrabold py-3 pr-1">{name}</h3>
        <h4 className="price">&#8377;{price / 100 || defaultPrice / 100}</h4>
        <p className="description text-gray-500 pr-1 text-sm">{description}</p>
      </div>
      <div className="w-3/12 h-[150] rounded-2xl cursor-pointer relative">
        <img
          className="w-[100%] h-[150]"
          src={`${MENU_IMAGE_URL}${imageId}`}
          alt="menu image"
        />
        {!onlyCurrentItem?.length ? (
          <button
            className="bg-white dark:bg-black absolute bottom-[-10%] py-1 px-8  
          left-[18%] border-1 border-gray-300 cursor-pointer text-green-500 font-bold rounded-lg"
            onClick={() => {
              handleAddItem(menuItem);
            }}
          >
            ADD
          </button>
        ) : (
          <div
            className="bg-white dark:bg-black absolute bottom-[-10%] py-1 w-[90px] px-2  
          left-[18%] border-1 border-gray-300  text-green-500 font-bold rounded-lg flex justify-between"
          >
            <button
              className="cursor-pointer"
              onClick={() => handleDeleteItem(menuItem.id)}
            >
              -
            </button>
            {onlyCurrentItem.length}
            <button
              className="cursor-pointer"
              onClick={() => {
                handleAddItem(menuItem);
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default RestaurantMenuItem;
