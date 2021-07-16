import React from 'react';

import "./styles/BusquedaAcciones.scss";

class BusquedaAcciones extends React.Component {
    render (){
        return(
            <div className="busqueda__acciones contenedor__contenido">  
                <button type="button" onClick={ this.props.anteriorPagina }>Anterior</button>
                <button type="button" onClick={ this.props.siguientePagina }>Siguiente</button>
            </div>
        )
    }
}

export default BusquedaAcciones;
