import "../styles/Cards.css";
// import {Helmet} from "react-helmet";

import { useState, useEffect } from "react";

export default function Cards({
  charactersTabFiltered,
  changeChatFull,
  setMsg,
  msg,
}) {
  // const [characters, setCharacters] = useState(charactersTabFiltered[0]);

  // const [characterCurrent, setCharacterCurrent] = useState([]
  //     //  charactersTabFiltered
  // );

  // useEffect(
  //   () =>characterCurrent != null && changeCharacter() ,
  //   []
  // );

  const [count, setCount] = useState(0);
  // console.log('poullllll',characterCurrent);
  // setCharacterCurrent(characterCurrent[0])

  // const changeCharacter = () => {
  //  i = Math.floor(Math.random() * charactersTabFiltered.length);
  //  console.log(i);
  //  setCount(i)
  // console.log("poulet", charactersTabFiltered);
  // setCharacterCurrent(charactersTabFiltered[count]);
  // };

  const chgtState = () => {
    setCount(Math.floor(Math.random() * charactersTabFiltered.length));
  };

  
  const chgtStateAll = () => {
    setCount(Math.floor(Math.random() * charactersTabFiltered.length));
    setMsg([])

  };
  ;


  return (
    <div className="card-section">
      {/* <button onClick={() => chgtStateAll()}>zdzdadzadad</button> */}
      <div className="holder-filter-button">
        <button onClick={() => chgtState()} className="filter-button">
          Commencer
        </button>
      </div>
      {console.log("********************", charactersTabFiltered)}
      {count !== 0 && (
        <>
          <div className="card">
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
            <button className="filter-button next" onClick={() => chgtStateAll()}>
              Next
            </button>
            <button className="filter-button aime">Aime</button>
          </div>
        </>
      )}
    </div>
  );
}
