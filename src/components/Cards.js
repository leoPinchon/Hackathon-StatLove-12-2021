import abdou from "../assets/abdou.jpg";
import "../styles/Cards.css";
// import {Helmet} from "react-helmet";



export default function Cards(props) {
  return (
  
    <div className="card-section">
      <div className="card">
        <div className="card-content">
          <div className="card-img-box">
            <img src={abdou} alt="profil" />
          </div>
          <div className="card-content-box">
            <h3>
              Luke Skywalker
              <br />
              <span>Human</span>
            </h3>
          </div>
        
        </div>
        <ul className="card-info">
            <li>Genre: Male</li>
            <li>Taille : 1.72cm</li>
            <li >Résidence: Tatooine</li>
          </ul>
      </div>
    </div>


  );

}
