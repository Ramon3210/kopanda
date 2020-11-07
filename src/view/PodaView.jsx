import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ReactPlayer from 'react-player'

class PodaView extends Component {
  state = {};
  render() {
    return (
      <div className="css-actividad">
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

      </div>
 <font size="6" face="Gabriola" color="black">Aquí va la PODA</font>
    );
  }
}

export default PodaView;
