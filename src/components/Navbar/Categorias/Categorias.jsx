import { Link } from "react-router-dom";
import React from "react";

const Categorias = React.memo(() => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Muebles de ...
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/category/Cocina"}>Cocina</Link></li>
                <li><Link className="dropdown-item" to={"/category/Dormitorio"}>Dormitorio</Link></li>
                <li><Link className="dropdown-item" to={"/category/Living"}>Living</Link></li>
                <li><Link className="dropdown-item" to={"/category/Baño"}>Baño</Link></li>
            </ul>
        </li>
    );
})

export default Categorias;
