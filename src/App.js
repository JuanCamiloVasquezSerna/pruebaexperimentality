import React from 'react';

import Header from './components/Header';
import NavBar from './components/NavBar';
import NavBarMovil from './components/NavBarMovil';
import Banner from './components/Banner';
import Categorias from './components/Categorias';
import MasBuscados from './components/MasBuscados';
import Busqueda from './components/Busqueda';
import CarritoCompras from './components/CarritoCompras';

import Footer from './components/Footer';
import Copyright from './components/Copyright';

import AppServices from './services/AppServices';

import './App.scss';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            idcategoria: null,
            productos: [],
            menumovilactive: false,
            busqueda: [],
            carritodecompras: [],
            carritoactive: false,
            limit: 20,
            offset: 0,
            search: '',
            valortotalcarrito: 0,
            sinresultados: false
        }

        this.controladorTiempo = null;
    }

    render (){
        return(
            <div className="App">
                <Header 
                    toggleMenu={ this.toggleMenu }
                    activeMenu={ this.state.menumovilactive }
                    buscarProducto={ this.buscarProducto }
                    toggleCarrito={ this.toggleCarrito }
                    productoscarrito={ this.state.carritodecompras.length }
                />
                <NavBar />
                <NavBarMovil
                    active={ this.state.menumovilactive }
                    toggleMenu={ this.toggleMenu }
                />

                {
                    (() => {
                        if(this.state.busqueda.length === 0 && !this.state.sinresultados){
                            return(
                                <React.Fragment>
                                    <Banner />
                                    <Categorias />
                                    <MasBuscados
                                        productos={ this.state.productos }
                                        agregarAlCarrito={ this.agregarAlCarrito }
                                    />
                                </React.Fragment>
                            )
                        }
                    })()
                }

                {
                    this.state.busqueda.length > 0 && (
                        <Busqueda
                            productos={ this.state.busqueda }
                            agregarAlCarrito={ this.agregarAlCarrito }
                            siguientePagina={ this.siguientePagina }
                            anteriorPagina={ this.anteriorPagina }
                        />
                    )
                }

                {
                    this.state.sinresultados && (
                        <div id="sinResultados">
                            <p>Sin resultados</p>
                        </div>
                    )
                }
                
                <CarritoCompras
                    productos={ this.state.carritodecompras }
                    eliminarDelCarrito={ this.eliminarDelCarrito }
                    cantidad={ this.cantidad }
                    active={ this.state.carritoactive }
                    toggleCarrito={ this.toggleCarrito }
                    valortotalcarrito={ this.state.valortotalcarrito }
                />
                <Footer />
                <Copyright />
            </div>
        )
    }

    componentDidMount(){
        this.obtenercategorias();
    }

    obtenercategorias = () => {
        AppServices.obtenercategorias().then((success) => {
            success.data.forEach((item) => {
                if(item.name === 'Ropa y Accesorios'){
                    this.setState({
                        idcategoria: item.id
                    }, () => {
                        this.obtenerproductos();
                    });
                }
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    obtenerproductos = () => {
        AppServices.obtenerproductos(this.state.idcategoria).then((success) => {
            this.setState({
                productos: success.data.results
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    toggleMenu = () => {
        this.setState({
            menumovilactive: !this.state.menumovilactive
        });
    }

    buscarProducto = (event) => {
        clearTimeout(this.controladorTiempo);
        this.setState({
            limit: 20,
            offset: 0
        }); 

        let value = event.target.value;

        if(value.length > 0){
            this.controladorTiempo = setTimeout(() => {
                this.search(value);
            }, 1000);
        }else{
            this.setState({
                busqueda: [],
                limit: 20,
                offset: 0,
                sinresultados: false
            }); 
        }
    }

    siguientePagina = () => {
        this.setState({
            offset: this.state.offset + this.state.limit
        }, () => {
            this.search(this.state.search);
        });
    }

    anteriorPagina = () => {
        if(this.state.offset === 0){
            return false;
        }

        this.setState({
            offset: this.state.offset - this.state.limit
        }, () => {
            this.search(this.state.search);
        });
    }

    search = (value) => {
        AppServices.search(value, this.state.idcategoria, this.state.limit, this.state.offset).then((success) => {
            this.setState({
                busqueda: success.data.results,
                search: value,
                sinresultados: success.data.results.length > 0 ? false : true
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    toggleCarrito = () => {
        this.setState({
            carritoactive: !this.state.carritoactive
        });
    }

    agregarAlCarrito = (producto) => {
        let productos = this.state.carritodecompras;
        let agregarnuevo = true;

        productos = productos.map((item) => {
            if(item.id === producto.id){
                item.cantidad = (item.cantidad + 1);
                item.total = (item.price * item.cantidad);

                agregarnuevo = false
            }

            return item;
        });

        if(agregarnuevo){
            productos.push({
                id: producto.id,
                original_price: producto.original_price,
                thumbnail: producto.thumbnail,
                title: producto.title,
                price: producto.price,
                cantidad: 1,
                total: producto.price
            });
        }

        this.setState({
            carritodecompras: productos
        }, () => {
            this.setState({
                carritoactive: true
            });

            this.totalCarrito();
        });
    }

    eliminarDelCarrito = (producto) => {
        let productos = this.state.carritodecompras;

        productos = productos.filter((item) => {
            return item.id !== producto.id
        });

        this.setState({
            carritodecompras: productos
        }, () => {
            this.totalCarrito();
        });
    }

    cantidad = (producto, tipo) => {
        if(tipo === 'restar' && producto.cantidad === 1) return false;

        let productos = this.state.carritodecompras;

        productos = productos.map((item) => {
            if(item.id === producto.id){
                item.cantidad = tipo === 'sumar' ? (item.cantidad + 1) : (item.cantidad - 1);
                item.total = (item.price * item.cantidad);
            }

            return item;
        });

        this.setState({
            carritodecompras: productos
        }, () => {
            this.totalCarrito();
        });
    }

    totalCarrito = () => {
        let suma = 0;

        this.state.carritodecompras.forEach((producto) => {
            suma +=  producto.total;
        });

        this.setState({
            valortotalcarrito: suma
        });
    }
}

export default App;
