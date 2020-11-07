import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';

class ComidasView extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="css-comidas">
                <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                </Link>
                <a href="https://drive.google.com/file/d/1QhCwqBle3uOgmJzRaagm6ZMFW5LLhTP6/view?usp=sharing"</a> 
                
            </div>
         );
    }
}
 
export default ComidasView;
