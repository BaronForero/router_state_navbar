import { Link } from "react-router-dom"
import { useState } from "react";

const NavBar = () => {
    const [color, changeColor]= useState(false)

    const pressButton = () => {
        changeColor(!color)
    }

    return (  
        <div>
            <Link 
            onClick={pressButton}
            style={{backgroundColor: color ? "lightblue" : "pink"}} 
            to='/gallerie'>Gallerie</Link>

            <Link to='/kontakt'>Kontakt</Link>
            <Link to='/öffnungszeiten'>Öffnungszeiten</Link>
            <Link to='/speisekarte'>Speisekarte</Link>
        </div>
    
    );
}

export default NavBar;