import { useMemo, useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

const MenuCategory = ({ category, isVegCheck, isNonVegCheck }) => {
  const { title, itemCards } = category?.card?.card;
  const [isExpanded, setIsExpanded] = useState(true);
    const filteredResMenu =
      useMemo(() => {
        if (isVegCheck) {
          return itemCards.filter((menuItem) => menuItem?.card?.info?.isVeg);
        }
        if (isNonVegCheck) {
          return itemCards.filter(
            (menuItem) => !menuItem?.card?.info?.isVeg
          );
        }
        return itemCards;
      }, [itemCards, isVegCheck, isNonVegCheck]) || [];
  return (
    <div className="py-2 border-b-6 border-gray-100">
      {/* header */}
      <div className="text-md font-bold flex justify-between items-center">
        {title} ({filteredResMenu.length})
        <span className="text-lg font-bold text-gray-400 cursor-pointer" onClick={() => {
            setIsExpanded((prevState) => !prevState)
        }}>{isExpanded ? '-' : '+'}</span>
      </div>
      { isExpanded && <div>
        {filteredResMenu?.map((menuItem) => {
          return (
            <RestaurantMenuItem
              menuItem={menuItem?.card?.info}
              key={menuItem?.card?.info.id}
            />
          );
        })}
      </div>}
    </div>
  );
};
export default MenuCategory;
