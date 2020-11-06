import React from 'react'
import Header from './Header';
import CrecimientoView from '../view/CrecimientoView';
import Footer from './Footer';

class Crecimiento extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="CRECIMIENTO" />
                <CrecimientoView />
                <Footer />
            </div>
         );
    }
}
 
export default Crecimiento;

