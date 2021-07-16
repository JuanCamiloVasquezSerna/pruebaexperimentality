import React from 'react';

import ListadoProductos from './ListadoProductos';

import "./styles/MasBuscados.scss";

class MasBuscados extends React.Component {
    render (){
        return(
            <div id="masbuscados">
                <div id="masbuscados__contenedor" className="contenedor__contenido">
                    <h1>Productos más buscados</h1>

                    <ListadoProductos
                        productos={ this.props.productos }
                        agregarAlCarrito={ this.props.agregarAlCarrito }
                    />
                </div>
            </div>
        )
    }
}

export default MasBuscados;
