import "../styles/Home.css"

import Galaxy from "../assets/galaxy01.png"
import Vaisseau from "../assets/vaisseau.png"
import Down from "../assets/down.png"

import {Link, Outlet} from "react-router-dom"
import { gsap } from "gsap";
import  { useRef, useEffect } from 'react'


export default function Home() {
    const boxRef = useRef()
    useEffect(() => {
        const from = gsap.to(".home-nav-vaisseau", {duration: 6, x: -1250,y: 900, ease: "easeOut", repeat: 50, delay: 2})
        from.delay(0.5)
        })




   let knowActive = false;

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
                    <p className="home-nav-text_text">"Venez trouver l'amour dans la profondeur de la galaxy"
                    </p>
                </ div>
                <Link to="/KnowMore" onClick={knowActive=!knowActive} className={knowActive ? "KnowMore" : "KnowMoreActive"}><img className="home-nav-down" src={Down} alt="down"></img></Link>
                
            </nav>
            
            <Outlet />
            
            <img className="home-nav-galaxy" src={Galaxy} alt="galaxy" ></img>
            <img className="home-nav-vaisseau" src={Vaisseau} alt="vaisseau" ref={boxRef}></img>
            

            

        </div>
    )
}