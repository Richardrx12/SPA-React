import React from "react";
import { Link } from "react-router-dom";
import './pagina-inicial.css'

const PaginaInicial = () => (
        <div className="pagina-inicial">

            <h1> Escolha seu caminho em JavaScript </h1>
            
            <div className="links">
                <Link className="front-end" to='/front-end'>Front End</Link>
                <Link className="back-end" to='/back-end'>Back End</Link>
            </div>
        </div>
    );

export default PaginaInicial;
