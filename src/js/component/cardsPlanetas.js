import React, { useContext, useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AppContext } from "../store/appContext";
import "./styles/cardpersonajes.css";

const CardsPlanetas = () => {
  const [planetas, setPlanetas] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => setPlanetas(data.results));
  }, []);

  const handleLearnMore = (planetaId) => {
    fetch(`https://swapi.dev/api/planets/${planetaId}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Planeta details:", data);
        // Aquí puedes hacer algo con los detalles del planeta obtenidos de la API
      })
      .catch((error) => {
        console.error("Error fetching planeta details:", error);
      });
  };

  return (
    <div className="card-container d-flex flex-nowrap overflow-auto">
      {planetas.map((planeta) => (
        <div className="card" style={{ width: "18rem" }} key={planeta.url}>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${getPlanetaId(
              planeta.url
            )}.jpg`}
            className="card-img-top"
            alt={planeta.name}
          />
          <div className="card-body">
            <h5 className="card-title">{planeta.name}</h5>
            <p className="card-text">Clima: {planeta.climate}</p>
            <p className="card-text">Terreno: {planeta.terrain}</p>
            <Link
              to={`/planets/${getPlanetaId(planeta.url)}`}
              className="btn btn-outline-light"
              onClick={() => handleLearnMore(getPlanetaId(planeta.url))}
            >
              Aprende más!
            </Link>
            <button
              className="btn btn-outline-warning position-absolute bottom-5 end-0 m-2"
              onClick={() => addToFavorites(planeta, "planet")}
            >
              <FontAwesomeIcon icon={faHeart} style={{ color: "#fef84d" }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const getPlanetaId = (url) => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : "";
};

export { CardsPlanetas };
