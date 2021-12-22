import Cards from "../components/Cards"
import Header from "../components/Header"
import Galaxy from "../assets/galaxy01.png"
import Filtre from "../components/Filtre"
import ChatPage from "./ChatPage"
import Timer from "../components/Timer"

import {useState} from "react"



import "../styles/Filter.css"

export default function Filters()  {
 const [charactersTabFiltered, setCharactersTabFiltered] = useState([]);

 const [chatFull, setChatFull] = useState(false);


 const [msg, setMsg] = useState([]) 

 const changeChatFull = () => {
    setChatFull(!chatFull)
 }
console.log(chatFull)
//  let boll=chatFull
//  setChatFull(!boll)
 


        return (
            <div className="filters">
                <Header />
                <img className="filters-galaxy" src={Galaxy} alt="galaxy"></img>
                <img className="filters-galaxy2" src={Galaxy} alt="galaxy"></img> 
                <div className="filter-box">
                    <div className="title-filter"><h2>Bienvenue :</h2></div>
                    <div className="title-filter"><h2>Choisissez vos filtres :</h2></div> 
                    <div className="holder-filter-container">
                        <div className="filter-container">
                            <div className="selector"><Filtre  setCharactersTabFiltered={setCharactersTabFiltered} select="gender" nameDisplay="Genre" /></div>
                            <div className="selector"><Filtre  setCharactersTabFiltered={setCharactersTabFiltered} select="species" nameDisplay="Espèces"/></div>
                            {/* <div className="selector"><Filtre  setCharactersTabFiltered={setCharactersTabFiltered} select="height" nameDisplay="Taille"/></div>
                            <div className="selector"><Filtre  setCharactersTabFiltered={setCharactersTabFiltered} select="mass" nameDisplay="Poids"/></div> */}
                        </div>
                    </div>
                       <Cards  msg={msg} setMsg={setMsg} changeChatFull={changeChatFull} chatFull={chatFull} charactersTabFiltered={charactersTabFiltered}/>
                </div> 
                <div className="filters-Chat">

                    <ChatPage msg={msg} setMsg={setMsg} /> 
                    <Timer></Timer>

               
                </div>

            </div>
        )
}

