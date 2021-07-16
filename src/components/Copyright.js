import React from 'react';

import "./styles/Copyright.scss";

class Copyright extends React.Component {
    render (){
        return(
            <div id="copyright">
                <div id="copyright__contenedor" className="contenedor__contenido flex">
                    <p>© Copyright Colombia. Todos los derechos reservados</p>
                </div>
            </div>
        )
    }
}

export default Copyright;