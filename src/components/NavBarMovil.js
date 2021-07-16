import React from 'react';

import BotonMenuMovil from './BotonMenuMovil';
import MenuItems from './MenuItems';

import './styles/NavBarMovil.scss';

class NavBarMovil extends React.Component{
	render(){
		return(
			<div className={ `navbar_movil ${ this.props.active ? 'active' : 'not-active' }` }>
				<div className="navbar_movil__contenedor">
					<BotonMenuMovil
						active={ this.props.active }
						toggleMenu={ this.props.toggleMenu }
					/>

			  		<MenuItems />
			  	</div>
			</div>
		)
	}
}

export default NavBarMovil;