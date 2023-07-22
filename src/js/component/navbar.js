import React, { useContext } from "react";
import { Link } from "react-router-dom";
import star from "../component/img/otra.png";
import { AppContext } from "../store/appContext"; // Importa el contexto
import "../component/styles/navbar.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  // Accede al contexto utilizando el hook useContext
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  return (
    <div>
      <nav className="navbar navbar-light bg-back mb-5">
        <Link to="/">
          <img className="logo" src={star} alt="Star"></img>
        </Link>
        <div className="spacer"></div>
        <div className="left-content">
          <div className="dropdown">
            <button
              className="btndrop dropdown-toggle"
              type="button"
              id="favoritesDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
              {favorites.length > 0 ? (
                favorites.map((character) => (
                  <li key={character.url}>
                    <p>{character.name}</p>
                    <button
                      className="dropdown-item"
                      onClick={() => removeFromFavorites(character)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="me-2" />
                    </button>
                  </li>
                ))
              ) : (
                <li>
                  <p className="dropdown-item">No hay personajes favoritos</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
