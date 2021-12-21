import "../styles/Home.css"
import Galaxy from "../assets/galaxy01.png"
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <nav className="home-nav">
                <h1 className="home-nav-title">SATURDAY<br/>NIGHT<br/>ROULETTE</h1>
                <div className="home-nav-input">
                    <input className="home-nav-input_id" type="text" name="" placeholder="Identifiant"></input>
                    <input className="home-nav-input_password" type="password" name="" placeholder="Mot de passe"></input>
                </div>
                <Link to="/filters"><button className="home-nav-button">Go</button></Link>
                <div className="home-nav-text">
                    <p className="home-nav-text_text">"Venez trouver l'amour dans la profondeur de la galaxy, utilisez notre love roulette, et parcourez planetes apres planetes, afin de trouver votre ame soeur"
                    </p>
                </ div>
            </nav>
            <img className="home-nav-galaxy" src={Galaxy} alt="galaxy"></img>
        </div>
    )
}