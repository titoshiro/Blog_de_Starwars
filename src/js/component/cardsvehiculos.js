import React, { useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CardsVehiculos = () => {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles/")
      .then((response) => response.json())
      .then((data) => setVehiculos(data.results));
  }, []);

  return (
    <div className="card-container d-flex flex-nowrap overflow-auto">
      {vehiculos.map((vehiculo) => (
        <div className="card" style={{ width: "18rem" }} key={vehiculo.url}>
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${getVehiculoId(
              vehiculo.url
            )}.jpg`}
            className="card-img-top"
            alt={vehiculo.name}
          />
          <div className="card-body">
            <h5 className="card-title">{vehiculo.name}</h5>
            <p className="card-text">Modelo: {vehiculo.model}</p>
            <p className="card-text">Fabricante: {vehiculo.manufacturer}</p>
            <Link
              to={`/vehiculos/${getVehiculoId(vehiculo.url)}`}
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

const getVehiculoId = (url) => {
  const matches = url.match(/\/(\d+)\/$/);
  return matches ? matches[1] : "";
};

export { CardsVehiculos };
