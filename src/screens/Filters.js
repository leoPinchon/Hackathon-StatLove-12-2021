import { useState, useEffect } from "react";
import Chat from "./Chat";
import Filtre from "../components/Filtre";
import Galaxy from "../assets/galaxy01.png";
import Header from "../components/Header";
import Cards from "../components/Cards";

import "../styles/Filter.css";

export default function Filters() {
  const [charactersTabFiltered, setCharactersTabFiltered] = useState([]);
  

  return (
    <div className="filters">
      <Header />
      <img className="filters-galaxy" src={Galaxy} alt="galaxy"></img>
      <img className="filters-galaxy2" src={Galaxy} alt="galaxy"></img>
      <div>
        <h2>Choisissez vos filtres :</h2>
        <div className="filter-container">
          <div className="gender">
            <Filtre
              setCharactersTabFiltered={setCharactersTabFiltered}
              select="gender"
            />
          </div>
          <div className="species">
            <Filtre
              setCharactersTabFiltered={setCharactersTabFiltered}
              select="species"
            />
          </div>
          <div className="height">
            <Filtre
              setCharactersTabFiltered={setCharactersTabFiltered}
              select="height"
            />
          </div>
          <div className="mass">
            <Filtre
              setCharactersTabFiltered={setCharactersTabFiltered}
              select="mass"
            />
          </div>
        </div>
        <Cards charactersTabFiltered={charactersTabFiltered} />
      </div>
      <Chat />
      <p>Et ici le Chat</p>
      <p>Et ici le Chat</p>
      <p>Et ici le Chat</p>
      <p>Et ici le Chat</p>
      <p>Et ici le Chat</p>
      <p>Et ici le Chat</p>
    </div>
  );
}
