import React from 'react';

import './styles/BotonMenuMovil.scss';

class BotonMenuMovil extends React.Component{
	render(){
		return(
			<div className="boton_menu_movil">
			  	<div
			  		className={ `boton_menu_movil__box ${ this.props.active ? 'active' : 'not-active' }` }
			  		onClick={ this.props.toggleMenu }
			  	>
				    <span></span>
				    <span></span>
				    <span></span>
			  	</div>
			</div>
		)
	}
}

export default BotonMenuMovil;