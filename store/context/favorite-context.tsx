import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext({
  ids: Array<any>([]),
  addFavorite: (id: number) => {},
  removeFavorite: (id: number) => {},
});

const FavoritesContextProvider = ({ children }: any) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<Array<any>>([]);

  const addFavorite = (id: number) => {
    setFavoriteMealIds((prev: any) => [...prev, id]);
  };

  const removeFavorite = (id: number) => {
    setFavoriteMealIds((prev: any) =>
      prev.filter((mealId: any) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoritesContextProvider;
