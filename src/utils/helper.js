export const getMenuItemsDeep = (cards) => {
  let allMenuItems = [];
  cards.map((card) => {
    if (card?.card?.card?.itemCards) {
      const _cards = card?.card?.card?.itemCards || [];

      allMenuItems = [..._cards, ...allMenuItems];
      allMenuItems = getUniqueCards(allMenuItems);
    }
  });
  return allMenuItems;
};

const getUniqueCards = (_cards) => {
  let uniqueCards = [];
  let map = {};
  _cards.forEach((_card) => {
    const id = _card.card.info.id;
    if (!map[id]) {
      uniqueCards.push(_card);
    }
    map[id] = 1;
  });
  return uniqueCards;
};
