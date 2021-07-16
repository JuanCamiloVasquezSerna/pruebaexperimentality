import React from 'react';

import {ReactComponent as FB} from '../images/icon_fb.svg';
import {ReactComponent as YouTube} from '../images/icon_youtube.svg';
import {ReactComponent as Instagram} from '../images/icon_instagram.svg';
import {ReactComponent as Twitter} from '../images/icon_twitter.svg';

import "./styles/Footer.scss";

class Footer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activePoliticas: false,
            activeSobreNosotros: false
        }
    }

    render (){
        return(
            <div id="footer">
                <div id="footer__contenedor" className="contenedor__contenido flex">
                    <div className="footer__item">
                        <div className="footer__item-titulo" onClick={ () => this.colapsable('activePoliticas') }>
                            <h1>Políticas</h1>

                            {
                                !this.state.activePoliticas && (
                                    <h1 className="footer__item-titulo-plus">+</h1> 
                                )                                
                            }

                            {
                                this.state.activePoliticas && (
                                    <h1 className="footer__item-titulo-plus">-</h1>
                                )                                
                            }
                        </div>

                        <ul className={ this.state.activePoliticas ? 'active' : 'not-active' }>
                            <li>Políticas de privacidad</li>
                            <li>Políticas de cambio</li>
                            <li>Políticas de envío</li>
                            <li>Términos y condiciones</li>
                            <li>Responsabilidad social</li>
                        </ul>
                    </div>

                    <div className="footer__item">
                        <div className="footer__item-titulo" onClick={ () => this.colapsable('activeSobreNosotros') }>
                            <h1>Sobre nosotros</h1>
                            
                            {
                                !this.state.activeSobreNosotros && (
                                    <h1 className="footer__item-titulo-plus">+</h1> 
                                )                                
                            }

                            {
                                this.state.activeSobreNosotros && (
                                    <h1 className="footer__item-titulo-plus">-</h1>
                                )                                
                            }
                        </div>

                        <ul className={ this.state.activeSobreNosotros ? 'active' : 'not-active' }>
                            <li>Encuentra tu tienda</li>
                            <li>Contáctanos</li>
                            <li>Trabaja con nosotros</li>
                        </ul>
                    </div>

                    <div className="footer__item-img">
                        <div className="footer__item-titulo">
                            <h1>Síguenos en:</h1>
                        </div>

                        <ul>
                            <li><FB /></li>
                            <li><Twitter /></li>
                            <li><Instagram /></li>
                            <li><YouTube /></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    colapsable = (tipo) => {
        let innerWidth = window.innerWidth;

        if(innerWidth < 768){
            this.setState({
                [tipo]: !this.state[tipo]
            });
        }
    }
}

export default Footer;
