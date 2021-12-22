import "../styles/Cards.css";
// import {Helmet} from "react-helmet";


import { useState, useEffect } from 'react'


export default function Cards(props) {

  const [characters, setCharacters] = useState(null)

  useEffect(() => {
      const getData = () => {
          fetch(`https://miadil.github.io/starwars-api/api/all.json`)
          .then((res) => res.json())
          .then((res) => setCharacters(res));
      }
      getData()

  }, [])

  const randomNumber = Math.floor(Math.random() * 88)

  
    

  return (
  
    <div className="card-section">
      { characters != null &&
      
      <div className="card">
        <div className="card-content">
          <div className="card-img-box">
            <img src={characters[randomNumber].image} alt="profil" />
          </div>
          <div className="card-content-box">
            <h3>
               {characters[randomNumber].name}
              <br />
              <span>{characters[randomNumber].species}</span>
            </h3>
            <h3> 
              
            </h3>
            
          </div>
        
        </div>
        <ul className="card-info">
            <li>Genre: {characters[randomNumber].gender}</li>
            <li>Taille : {characters[randomNumber].height}</li>
            <li >Résidence: {characters[randomNumber].homeworld}</li>
          </ul>
      </div>
           }
    </div>


  );

}
