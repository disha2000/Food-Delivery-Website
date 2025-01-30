import RestaurantItem from "./RestaurantItem";

const RestaurantLists = (props) => {
  console.log('props', props)
  const { restaurantLists } = props;
  return (
    <div className="restaurants___container">
      {restaurantLists.map((restaurant) => {
        const { id } = restaurant?.info;
        return <RestaurantItem key={id} restaurant={restaurant} />;
      })}
    </div>
  );
};

export default RestaurantLists;
