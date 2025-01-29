import RestaurantLists from './RestaurantLists'

const MainHome = () => {
    return (
      <div className="main__container">
        <div className="search">Search</div>
        <RestaurantLists />
      </div>
    );
  };

export default MainHome;