import Header from "../components/Header"
import Galaxy from "../assets/galaxy01.png"
import Filtre from "../components/Filtre"
import Chat from "./Chat"

import "../styles/Filter.css"

export default function Filters()  {
        return (
            <div className="filters">
                <Header />
                <img className="filters-galaxy" src={Galaxy} alt="galaxy"></img>
                <img className="filters-galaxy2" src={Galaxy} alt="galaxy"></img>  
                <div>
                    <h2>Choisissez vos filtres :</h2>
                    <div className="filter-container">
                    <div className="gender"><Filtre select="gender" /></div>
                    <div className="species"><Filtre select="species" /></div>
                    <div className="height"><Filtre select="height" /></div>
                    <div className="mass"><Filtre select="mass" /></div>
                    </div>
                </div> 
                <Chat />

            </div>
        )
}