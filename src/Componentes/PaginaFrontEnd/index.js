import React from "react";
import './front-end.css'
import BotaoVoltar from "../BotaoVoltar";

const PaginaFrontEnd = () => {
    return (
            <div className="pag-front-end pagina-inicial">
                <h1> React.js </h1>

                <p>
                    **********   FrontEnd   **********
                </p>

                <BotaoVoltar />   
            </div>
        );
    };

export default PaginaFrontEnd;
