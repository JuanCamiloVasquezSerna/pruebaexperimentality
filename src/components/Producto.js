import React from 'react';
import FormatoDinero from './FormatoDinero';

import {ReactComponent as Cart} from '../images/icon-cart.svg';

import "./styles/Producto.scss";

class Producto extends React.Component {
    render (){
        return(
            <div className={ `producto ${ this.props.horizontal ? 'horizontal' : 'vertical' }` } >
                {
                    this.props.original_price != null && (
                        <div className="producto-descuento">
                            <p>-{ Math.round(((this.props.original_price - this.props.price) / this.props.original_price) * 100) }%</p>
                        </div>   
                    )
                }

                <div className="producto-imagen">
                    <div style={{ "backgroundImage": `url(${ this.props.thumbnail })` }}></div>
                </div>

                <div className="producto-info">
                    <div className="producto-titulo">
                        <p>{ this.props.title }</p>
                    </div>

                    <div className="producto-precio">
                        <p><FormatoDinero value={ this.props.price } /></p>
                        <p><FormatoDinero value={ this.props.original_price } /></p>
                    </div>

                    <div className="producto-accion">
                        <button type="button" onClick={ () => this.props.agregarAlCarrito(this.props) }><Cart /> <span>Agregar al carrito</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Producto;