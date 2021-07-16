import React from 'react';

import './styles/MenuItems.scss';

class MenuItems extends React.Component{
	render(){
		return(
		  	<nav className="menu_items">
                <ul>
                    <li>Hombre</li>
                    <li>Mujer</li>
                    <li>Junior</li>
                    <li>Niños</li>
                    <li>Accesorios</li>
                    <li>Ofertas</li>
                </ul>
            </nav>
		)
	}
}

export default MenuItems;