import React from 'react'
import Header from './Header';
import PodaView from '../view/PodaView';
import Footer from './Footer';

class Poda extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="PODA" />
                <PodaView />
                <Footer />
            </div>
         );
    }
}

export default Poda;

