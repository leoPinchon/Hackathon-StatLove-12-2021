import "../styles/Cards.css";
// import {Helmet} from "react-helmet";

import { useState, useEffect } from "react";

export default function Cards({ charactersTabFiltered }) {
  // const [characters, setCharacters] = useState(charactersTabFiltered[0]);

  const [characterCurrent, setCharacterCurrent] = useState(
    charactersTabFiltered
  );

  useEffect(
    () => changeCharacter() || console.log("ùùùùùùùùùù", characterCurrent),
    []
  );
  // setCharacterCurrent(characterCurrent[0]),[])


  const changeCharacter = () => {
    let count = Math.floor(Math.random() * charactersTabFiltered.length);
    console.log("poulet", charactersTabFiltered);
    setCharacterCurrent(charactersTabFiltered[count]);
  };


  return (
    <div className="card-section">
      {console.log("********************", charactersTabFiltered)}
      {characterCurrent != null && (
        <div className="card" onClick={changeCharacter}>
          <div className="card-content">
            <div className="card-img-box">
              <img src={characterCurrent.image} alt="profil" />
            </div>
            <div className="card-content-box">
              <h3>
                {characterCurrent.name}
                <br />
                <span>{characterCurrent.species}</span>
              </h3>
              <h3></h3>
            </div>
          </div>
          <ul className="card-info">
            <li>Genre: {characterCurrent.gender}</li>
            <li>Taille : {characterCurrent.height}</li>
            <li>Résidence: {characterCurrent.homeworld}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
