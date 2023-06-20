import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CardsPersonajes = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

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
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">
              Height: {character.height} cm
              <br />
              Mass: {character.mass} kg
              <br />
              Hair Color: {character.hair_color}
              <br />
              Skin Color: {character.skin_color}
              <br />
              Eye Color: {character.eye_color}
              <br />
              Birth Year: {character.birth_year}
              <br />
              Gender: {character.gender}
            </p>
            <Link
              to={`/characters/${getCharacterId(character.url)}`}
              className="btn btn-outline-primary"
            >
              Learn More!
            </Link>
            <a
              href="#"
              className="btn btn-outline-warning position-absolute bottom-5 end-0 m-2"
            >
              <FontAwesomeIcon icon={faHeart} style={{ color: "#fef84d" }} />
            </a>
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
