import React from 'react';

import MenuItems from './MenuItems';

import "./styles/NavBar.scss";

class NavBar extends React.Component {
    render (){
        return(
            <div id="navbar">
                <div id="navbar__contenedor">
                    <MenuItems />
                </div>
            </div>
        )
    }
}

export default NavBar;
