import React from 'react';

import BotonMenuMovil from './BotonMenuMovil';

import Logo from '../images/Logo.png';
import {ReactComponent as Cart} from '../images/icon-cart.svg';
import {ReactComponent as User} from '../images/icon-user.svg';
import {ReactComponent as Search} from '../images/Icon-ionic-ios-search.svg';

import "./styles/Header.scss";

class Header extends React.Component {
    render (){
        return(
            <div id="header">
                <div id="header__contenedor" className="contenedor__contenido flex">
                    <BotonMenuMovil
                        active={ this.props.activeMenu }
                        toggleMenu={ this.props.toggleMenu }
                    />

                    <div id="header__logo">
                        <img src={ Logo } alt="Clothesstore LATAM" />
                    </div>

                    <div id="header__buscador">
                        <input type="text" placeholder="Buscar aquí producto" onKeyUp={ this.props.buscarProducto } />

                        <div id="header__buscador-search">
                            <Search />
                        </div>
                    </div>

                    <div id="header__acciones">
                        <div id="header__acciones-cart">
                            <Cart onClick={ this.props.toggleCarrito } data-testid="header__acciones-cart" />

                            {
                                this.props.productoscarrito > 0 && (
                                    <span id="header__acciones-cart-cantidad">{ this.props.productoscarrito }</span>
                                )
                            }
                        </div>

                        <div id="header__acciones-user">
                            <User />
                        </div>

                        <div id="header__acciones-login">
                            <button type="button">Iniciar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
