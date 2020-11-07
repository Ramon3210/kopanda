import React from 'react'
import Header from './Header';
import EvaluacionView from '../view/EvaluacionView';
import Footer from './Footer';

class Evaluacion extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="PODA" />
                <EvaluacionView />
                <Footer />
            </div>
         );
    }
}
 
export default Evaluacion;
