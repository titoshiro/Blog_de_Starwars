import React, { useContext, useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";
import "./styles/cardpersonajes.css";

const CardsPersonajes = ({ getActions }) => {
  const [characters, setCharacters] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  const isFavorite = (character) => {
    return favorites.some((fav) => fav.id === character.id);
  };

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleLearnMore = (characterId) => {
    fetch(`https://swapi.dev/api/people/${characterId}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Character details:", data);
        // Aquí puedes hacer algo con los detalles del personaje obtenidos de la API
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
      });
  };

  return (
    <div className="card-container d-flex flex-nowrap overflow-auto">
      {characters.map((character) => (
        <div className="card" style={{ width: "18rem" }} key={character.url}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${getCharacterId(
              character.url
            )}.jpg`}
            className="card-img-top"
            alt={character.name}
          />
          <div className="card-body-personaje">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">
              Height: {character.height} cm
              <br />
              Mass: {character.mass} kg
              <br />
              Hair Color: {character.hair_color}
              <br />
            </p>
            <Link
              to={`/characters/${getCharacterId(character.url)}`}
              className="btn btn-outline-light"
              onClick={() => handleLearnMore(getCharacterId(character.url))}
            >
              Aprende más!
            </Link>
            <button
              className="btn btn-outline-warning position-absolute bottom-5 end-0 "
              onClick={() => addToFavorites(character)}
            >
              <FontAwesomeIcon icon={faHeart} style={{ color: "#fef84d" }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const getCharacterId = (url) => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : "";
};

export { CardsPersonajes };
