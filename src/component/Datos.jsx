import React, { Component } from 'react';
import Header from './Header';
import DatosView from '../view/DatosView';
import Footer from './Footer';

class Datos extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="CULTIVOS" />
                <DatosView />
                <Footer />
            </div>
         );
    }
}
 
export default Datos;
