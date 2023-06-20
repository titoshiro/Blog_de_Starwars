import React from "react";
import "../../styles/home.css";
import { CardsPersonajes } from "../component/cardsPersonajes";
import { CardsPlanetas } from "../component/cardsPlanetas";
import { CardsVehiculos } from "../component/cardsvehiculos";

export const Home = () => (
  <>
    <div className="container">
      <h1>Characters</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 card-container d-flex flex-nowrap overflow-auto">
          <div className="">
            <CardsPersonajes />
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="container">
      <h1>Planets</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 card-container d-flex flex-nowrap overflow-auto">
          <div className="">
            <CardsPlanetas />
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="container">
      <h1>Vehicles</h1>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 card-container d-flex flex-nowrap overflow-auto">
          <div className="">
            <CardsVehiculos />
          </div>
        </div>
      </div>
    </div>
  </>
);
