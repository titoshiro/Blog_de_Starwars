import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../store/appContext"; // Importa el contexto
import "../component/styles/single.css";
import { Link } from "react-router-dom";

const Single = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(AppContext);
  // Obtén el parámetro de la URL para obtener el "theid" del personaje
  const { theid } = useParams();

  // Estado para almacenar los detalles del personaje
  const [character, setCharacter] = useState(null);

  // Función para verificar si el personaje actual está en favoritos
  const isFavorite =
    character && favorites.some((fav) => fav.id === character.id);

  // Función para obtener los detalles del personaje con el ID theid
  useEffect(() => {
    // Realiza la llamada a la API para obtener los detalles del personaje
    fetch(`https://swapi.dev/api/people/${theid}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        // Guarda los detalles del personaje en el estado
        setCharacter(data);
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
        // Opcionalmente, podrías manejar el error aquí, por ejemplo, mostrar un mensaje de error en la interfaz.
      });
  }, [theid]); // Ejecuta la llamada a la API cuando el valor de theid cambia

  // Función para obtener la imagen del personaje desde la API "Star Wars Images"
  const getCharacterImage = () => {
    if (!character) return null;
    const characterId = character.url.split("/").filter(Boolean).slice(-1)[0];
    return `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  };

  return (
    <div>
      {character ? (
        <>
          <div className="container">
            <div className="row ">
              <div className="col-12 col-md-4">
                <img
                  src={getCharacterImage()}
                  className="img-fluid rounded-start w-100"
                  alt={character.name}
                />
              </div>
              <div className="col-12 col-md-8 ">
                <div className="card-body-single text-center m-5">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text ">
                    <b>Altura:</b>
                    <b> {character.height}</b>
                  </p>
                  <p className="card-text">
                    <b>Peso:</b> {character.mass}
                  </p>
                  <p className="card-text">
                    <b>Color de pelo:</b> {character.hair_color}
                  </p>
                  <p className="card-text">
                    <b>Color de piel: </b>
                    {character.skin_color}
                  </p>
                  <p className="card-text">
                    <b>Color ojos:</b> {character.eye_color}
                  </p>
                  <p className="card-text">
                    <b>Año de nacimiento:</b> {character.birth_year}
                  </p>
                  <p className="card-text">
                    <b>Género:</b> {character.gender}
                  </p>

                  <button className="btnsingle">
                    <Link to="/">Home</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-white text-center">
          {character === null
            ? "Cargando detalles del personaje..."
            : "Personaje no encontrado"}
        </h2>
      )}
    </div>
  );
};

export { Single };
