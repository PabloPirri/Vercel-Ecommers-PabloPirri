import React from "react";
import { Link } from "react-router-dom";


const Secciones = React.memo(() => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"} >Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}>Contacto</Link>
            </li>
        </>
    );
})

export default Secciones;
