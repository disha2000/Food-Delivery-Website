import { useSelector } from "react-redux";
import { useMemo } from "react";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const getUniqueCartData = () => {
    const uniqueIds = [...new Set(cartItems.map((item) => item.id))];
    return uniqueIds.map((id) => {
      const data = cartItems.filter((item) => item.id === id);
      return {
        ...data[0],
        totalPrice: data.reduce((sum, item) => {
            return sum = sum + item.price/ 100 || item.defaultPrice / 100;
        }, 0),
        totalCount: data.length,
      };
    });
  };


  const uniqueCartData = useMemo(() => getUniqueCartData(), [cartItems])

  const totalOverallCost = useMemo(() => { return uniqueCartData.reduce((sum, item) => {
    return sum = sum + item.totalPrice;
  }, 0)}, [cartItems])

  return (
    <div className="cart__container mt-[80] py-4 px-[10%] dark:bg-gray-900 dark:text-white h-[100%]">
      {!uniqueCartData.length ? (
        <div className="flex flex-col items-center justify-center py-20">
          <img
            className="w-[300px] h-300]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt="empty cart "
          />
          <h1 className="text-xl font-extrabold py-1.5">Your cart is empty</h1>
          <h2 className="text-md  py-2 text-gray-400">
            You can go to home page to view more restaurants
          </h2>
        </div>
      ) : (
        <div className="w-[50%] flex justify-center flex-col m-auto mt-[50px]">
          {uniqueCartData.map((_cartItem) => {
            return (
              <div className="flex justify-between  flex-row">
                <div className="text-md font-medium py-2">{_cartItem.name}</div>
                <div className="text-md font-medium py-2">{_cartItem.totalCount} <span className="text-gray-400 px-2">₹{_cartItem.totalPrice}</span></div>
              </div>
            );
          })}
          <hr/>
          <div className="font-medium text-lg">₹{totalOverallCost}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
