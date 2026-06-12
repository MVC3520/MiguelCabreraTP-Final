import { createContext, useContext, useState } from "react";
import type { Character } from "../types/types";

interface FavoritesContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<
  FavoritesContextType | undefined
>(undefined);

export function FavoritesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = (character: Character) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === character.id);

      if (exists) {
        return prev;
      }

      return [...prev, character];
    });
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const isFavorite = (id: number) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavorites debe utilizarse dentro de FavoritesProvider"
    );
  }

  return context;
}