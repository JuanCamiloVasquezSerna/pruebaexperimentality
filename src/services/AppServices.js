import Request from '../components/Request';

const AppServices = {
	async obtenercategorias(){
		return await Request({
			url: 'https://api.mercadolibre.com/sites/MCO/categories'
		});
	},

	async obtenerproductos(idcategoria){
		return await Request({
			url: `https://api.mercadolibre.com/sites/MCO/search?category=${ idcategoria }&discount=20-100`
		});
	},

	async search(texto, idcategoria, limit, offset){
		return await Request({
			url: `https://api.mercadolibre.com/sites/MCO/search?q=${ texto }&category=${ idcategoria }&limit=${ limit }&offset=${ offset }`
		});
	}
}

export default AppServices;