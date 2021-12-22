import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../styles/Home.css"
import robot from "../assets/404.gif"


const NotFound = () =>{

    return (

        <div className="boxNotFound">
            <h1>404</h1>
            <img src={robot} alt="robotLost"></img>
            <h4>Nothings to find here</h4>
            <Link to="/">Go Home</Link>
        </div>
    )
} 
export default NotFound