import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Button } from "@material-ui/core";
import logoNUTRICION1 from "../aguacate.gif";
import logoNUTRICION from "../aguacuate2.gif";

//import ReactPlayer from 'react-player'

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="App-content">
        
        <Container maxWidth="sm">
          <Link to="/datos">
            <Button variant="contained" color="default">
              Cultivo
            </Button>
          </Link>
          
          &nbsp;&nbsp;
          <div>
          <Link to="/evaluacion">
            <Button variant="contained" color="default">
              Poda
            </Button>
          </Link>
          </div>
          
     
          <div>
          <Link to="/crecimiento">
            <Button variant="contained" color="default">
              Crecimiento
            </Button>
          </Link>
          </div>
          
         
          <Link to="/comidas">
            <Button variant="contained" color="default">
              Prototipo
            </Button>
          </Link>
          
          &nbsp;&nbsp;
          <div>
          <Link to="/actividad">
            <Button variant="contained" color="default">
              Integrantes
            </Button>
          </Link>
          </div>
          <div>
          <Link to="/videos">
            <Button variant="contained" color="default">
              Videos
            </Button>
          </Link>
          </div>
          <img src={logoNUTRICION1} className="App-logo" alt="aguacate" />
          <img src={logoNUTRICION} className="App-logo" alt="aguacate2" />
        </Container>
      </div>
    );
  }
}


export default Content;
