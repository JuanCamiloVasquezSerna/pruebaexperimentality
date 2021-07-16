import React from 'react';

import Producto from './Producto';
import FormatoDinero from './FormatoDinero';
import BotonMenuMovil from './BotonMenuMovil';

import {ReactComponent as Minus} from '../images/minus-circle.svg';
import {ReactComponent as Plus} from '../images/plus-circle.svg';
import {ReactComponent as Trash} from '../images/trash-alt.svg';

import "./styles/CarritoCompras.scss";

class CarritoCompras extends React.Component {
    render (){
        return(
            <div id="carritocompras" className={ this.props.active ? 'active' : 'not-active' } >
                <div id="carritocompras__contenedor">
                    <div id="carritocompras__titulo">
                        <h1>Carrito de compras</h1>

                        <BotonMenuMovil
                            active={ this.props.active }
                            toggleMenu={ this.props.toggleCarrito }
                        />
                    </div>

                    <div id="carritocompras__productos">
                        {
                            this.props.productos.length > 0 && (
                                this.props.productos.map((producto) => {
                                    return(
                                        <div className="carritocompras__productos-producto" key={ producto.id }>
                                            <Producto horizontal={ true } { ...producto } />
                                            
                                            <div className="carritocompras__infoproducto">
                                                <div className="carritocompras__infoproducto-cantidad">
                                                    <div><Minus onClick={ () => this.props.cantidad(producto, 'restar') } /></div>
                                                    <div><p>{ producto.cantidad }</p></div>
                                                    <div><Plus onClick={ () => this.props.cantidad(producto, 'sumar') } /></div>
                                                </div>

                                                <div className="carritocompras__infoproducto-precio">
                                                    <p><FormatoDinero value={ producto.total } /></p>
                                                </div>

                                                <div className="carritocompras__infoproducto-eliminar">
                                                    <Trash onClick={ () => this.props.eliminarDelCarrito(producto) } />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }

                        {
                            this.props.productos.length === 0 && (
                                <p>¡El carrito de compras está vacío!</p>
                            )
                        }
                    </div>
                </div>

                {
                    this.props.productos.length > 0 && (
                        <div id="carritocompras__total">
                            <p><FormatoDinero value={ this.props.valortotalcarrito } /></p>
                            <button type="button">Comprar</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default CarritoCompras;