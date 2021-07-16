import React from 'react';
import SwiperCore, { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BannerImg from '../images/banner-principal-desktop.png';
import BannerImgMobile from '../images/banner-principal-mobile.png';

import {ReactComponent as ArrowLeft} from '../images/arrowleft.svg';
import {ReactComponent as ArrowRight} from '../images/arrowright.svg';

import 'swiper/swiper.scss';
import "./styles/Banner.scss";

SwiperCore.use([Navigation]);

class Banner extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            imagen: BannerImg
        }
    }

    render (){
        return(
            <div id="banner">
                <Swiper
                    className="banner__list"
                    spaceBetween={ 0 }
                    slidesPerView={ 1 }
                    loop={ true }
                    navigation={
                        {
                            prevEl: '#prev',
                            nextEl: '#next'
                        }
                    }
                >
                    
                    <SwiperSlide>
                        <img src={ this.state.imagen } alt="Banner 1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={ this.state.imagen } alt="Banner 2" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={ this.state.imagen } alt="Banner 3" />
                    </SwiperSlide>
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
        let innerWidth = window.innerWidth;
        
        if(innerWidth < 768){
            this.setState({
                imagen: BannerImgMobile
            });
        }
    }
}

export default Banner;
