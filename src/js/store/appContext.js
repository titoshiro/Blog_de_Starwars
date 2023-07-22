// appContext.js
import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // Aquí puedes definir tus estados y funciones necesarios para el contexto
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (character) => {
    // Lógica para agregar un personaje a la lista de favoritos
    setFavorites((prevFavorites) => [...prevFavorites, character]);
  };

  const removeFromFavorites = (character) => {
    // Lógica para eliminar un personaje de la lista de favoritos
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== character.id)
    );
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
