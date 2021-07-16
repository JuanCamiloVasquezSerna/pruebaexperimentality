import React from 'react';

import CategoriaModaInfantil from '../images/categorias-destacadas-moda-infantil.png';
import CategoriaProteccion from '../images/categorias-destacadas-proteccion.png';

import "./styles/Categorias.scss";

class Categorias extends React.Component {
    render (){
        return(
            <div id="categorias">
                <div id="categorias__contenedor" className="contenedor__contenido flex">
                    <div className="categorias__contenedor-categorias">
                        <img src={ CategoriaModaInfantil } alt="Moda infantil" />

                        <h1>Moda infantil</h1>
                    </div>

                    <div className="categorias__contenedor-categorias">
                        <img src={ CategoriaProteccion } alt="Protección" />

                        <h1>Protección</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categorias;
