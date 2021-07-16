import React from 'react';

import Producto from './Producto';
import BusquedaAcciones from './BusquedaAcciones';

import "./styles/Busqueda.scss";

class Busqueda extends React.Component {
    render (){
        return(
            <div id="busqueda">
                <BusquedaAcciones
                    anteriorPagina={ this.props.anteriorPagina }
                    siguientePagina={ this.props.siguientePagina }
                />

                <div id="busqueda__contenedor" className="contenedor__contenido flex">
                    {
                        this.props.productos.map((producto) => {
                            return <Producto key={ producto.id } { ...producto } agregarAlCarrito={ this.props.agregarAlCarrito } />
                        })
                    }
                </div>

                <BusquedaAcciones
                    anteriorPagina={ this.props.anteriorPagina }
                    siguientePagina={ this.props.siguientePagina }
                />
            </div>
        )
    }
}

export default Busqueda;
