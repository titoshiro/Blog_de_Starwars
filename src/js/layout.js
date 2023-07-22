import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Single } from "./views/single";
import { AppProvider } from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import "./component/styles/index.css";
import { CardsPersonajes } from "./component/cardsPersonajes";
import { CardsPlanetas } from "./component/cardsPlanetas";

const Layout = () => {
  useEffect(() => {
    // Aquí puedes realizar cualquier lógica o efectos que necesites al cargar el componente
    // Si anteriormente estabas utilizando el contexto para obtener el estado global,
    // puedes considerar otras opciones, como utilizar React Redux u otros patrones de manejo de estado.
  }, []);

  // Estado para almacenar los personajes favoritos
  const [favorites, setFavorites] = useState([]);

  // Función para agregar un personaje a favoritos
  const addToFavorites = (character) => {
    // Verifica si el personaje ya está en favoritos
    const isFavorite = favorites.some((fav) => fav.url === character.url);
    if (!isFavorite) {
      // Si no está en favoritos, agrégalo
      setFavorites([...favorites, character]);
    }
  };

  // Función para eliminar un personaje de favoritos
  const removeFromFavorites = (character) => {
    setFavorites(favorites.filter((fav) => fav.url !== character.url));
  };

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <AppProvider>
            {/* Pasa los valores y funciones como props al componente Navbar */}
            <Navbar
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters/:theid" element={<Single />} />
              <Route path="/characters" element={<CardsPersonajes />} />{" "}
              {/* Agrega esta ruta */}
              <Route path="/planets" element={<CardsPlanetas />} />{" "}
              {/* Agrega esta ruta */}
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
            <Footer />
          </AppProvider>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
