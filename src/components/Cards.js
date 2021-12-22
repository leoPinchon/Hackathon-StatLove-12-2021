import "../styles/Cards.css";
// import {Helmet} from "react-helmet";

import { useState, useEffect } from "react";

export default function Cards({ charactersTabFiltered }) {
  // const [characters, setCharacters] = useState(charactersTabFiltered[0]);

  // const [characterCurrent, setCharacterCurrent] = useState([]
  //     //  charactersTabFiltered
  // );

  // useEffect(
  //   () =>characterCurrent != null && changeCharacter() ,
  //   []
  // );

 const [count, setCount] = useState(0)
// console.log('poullllll',characterCurrent);
  // setCharacterCurrent(characterCurrent[0])

 let i = 0;
  
  const changeCharacter = () => {
   i = Math.floor(Math.random() * charactersTabFiltered.length);
   console.log(i);
   setCount(i)
    // console.log("poulet", charactersTabFiltered);
    // setCharacterCurrent(charactersTabFiltered[count]);
  };


  return (
    <div className="card-section">

      <div  className="holder-filter-button"><button onClick={() => setCount(Math.floor(Math.random() * charactersTabFiltered.length))} className="filter-button">Commencer</button></div>
      {console.log("********************", charactersTabFiltered)}
      {charactersTabFiltered.length > 1 && (
        <>
        <div className="card"  >
          <div className="card-content">
            <div className="card-img-box">
              <img src={charactersTabFiltered[count].image} alt="profil" />
            </div>
            <div className="card-content-box">
              <h3>
                {charactersTabFiltered[count].name}
                <br />
                <span>{charactersTabFiltered[count].species}</span>
              </h3>
              <h3></h3>
            </div>
          </div>
          <ul className="card-info">
            <li>Genre: {charactersTabFiltered[count].gender}</li>
            <li>Taille : {charactersTabFiltered[count].height}</li>
            <li>Résidence: {charactersTabFiltered[count].homeworld}</li>
          </ul>
        </div>
        <div className="buttons">
        <button className="filter-button next">Next</button>
        <button className="filter-button aime">Aime</button>
        </div>
        </>
      )}
    </div>
  );
}
