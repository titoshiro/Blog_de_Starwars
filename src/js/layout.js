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

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <AppProvider>
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
