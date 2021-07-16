import React from 'react';
import NumberFormat from 'react-number-format';

class FormatoDinero extends React.Component {
    render (){
        return(
            <NumberFormat value={ this.props.value } displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'$'} />
        )
    }
}

export default FormatoDinero;