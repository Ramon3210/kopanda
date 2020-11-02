import React from 'react'
import Header from './Header';
import VideosView from '../view/VideosView';
import Footer from './Footer';

class Videos extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Header name="VIDEOS" />
                <VideosView />
                <Footer />
            </div>
         );
    }
}
 
export default Videos;