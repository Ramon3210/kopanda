import React from 'react'
import Header from './Header';
import ComidasView from '../view/ComidasView';
import Footer from './Footer';

class Comidas extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="PROTOTIPO" />
                <ComidasView />
                <Footer />
            </div>
         );
    }
}
 
export default Comidas;
