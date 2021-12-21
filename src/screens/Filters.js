import Header from "../components/Header"
import Galaxy from "../assets/galaxy01.png"
import Filtre from "../components/Filtre"

import "../styles/Filter.css"

export default function Filters()  {
        return (
            <div className="filters">
                <Header />
            <img className="filters-galaxy" src={Galaxy} alt="galaxy"></img>
            <img className="filters-galaxy2" src={Galaxy} alt="galaxy"></img>  
                <div>
                    <h2>Choisissez vos filtres :</h2>
                    <Filtre select="gender" />
                    <Filtre select="species" />
                    <Filtre select="height" />
                    <Filtre select="mass" />
                </div> 
            </div>
        )
}