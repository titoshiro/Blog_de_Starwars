import React, { useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CardsPlanetas = () => {
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => setPlanetas(data.results));
  }, []);

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
              to={`/planetas/${getPlanetaId(planeta.url)}`}
              className="btn btn-outline-primary"
            >
              Aprende más!
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

const getPlanetaId = (url) => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : "";
};

export { CardsPlanetas };
