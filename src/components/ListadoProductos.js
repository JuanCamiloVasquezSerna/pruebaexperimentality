import React from 'react';
import SwiperCore, { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Producto from './Producto';

import {ReactComponent as ArrowLeft} from '../images/arrowleft.svg';
import {ReactComponent as ArrowRight} from '../images/arrowright.svg';

import 'swiper/swiper.scss';
import "./styles/ListadoProductos.scss";

SwiperCore.use([Navigation]);

class ListadoProductos extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            slidesPerView: 4
        }
    }

    render (){
        return(
            <div id="listadoproductos">
                <Swiper
                    spaceBetween={ 30 }
                    slidesPerView={ this.state.slidesPerView }
                    navigation={
                        {
                            prevEl: '#prev',
                            nextEl: '#next'
                        }
                    }
                >
                    {
                        this.props.productos.map((producto, index) => {
                            return(
                                <SwiperSlide key={ producto.id } data-testid={ `key_producto_${ index }` }>
                                    <Producto { ...producto } agregarAlCarrito={ this.props.agregarAlCarrito } />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                <div className="swiper__navegacion" id="prev">
                    <ArrowLeft />
                </div>

                <div className="swiper__navegacion" id="next">
                    <ArrowRight />
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.resize();

        window.addEventListener('resize', this.resize);
    }

    resize = () => {
        let innerWidth = window.innerWidth;
        
        if(innerWidth >= 1200){
            this.setState({
                slidesPerView: 4
            });
        }

        if(innerWidth >= 992 && innerWidth < 1200){
            this.setState({
                slidesPerView: 3
            });
        }

        if(innerWidth >= 768 && innerWidth < 992){
            this.setState({
                slidesPerView: 2
            });
        }

        if(innerWidth >= 576 && innerWidth < 768){
            this.setState({
                slidesPerView: 1
            });
        }

        if(innerWidth < 576){
            this.setState({
                slidesPerView: 1
            });
        }
    }
}

export default ListadoProductos;
