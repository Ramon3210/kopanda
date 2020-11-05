import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { TextField } from "@material-ui/core";
import imgDatos from "../imgDatos.png";

import { Button } from "@material-ui/core";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

//     import MultiSelect from "react-multi-select-component";
// import { ReactComponent } from '*.svg';
//    import 'react-multi-select-component/style.css';

//import './styles/App.css';

//     import * as React from 'react'

//     // const Example: React.FC = () => {
//         const options = [
//           { label: "Grapes 🍇", value: "grapes" },
//           { label: "Mango 🥭", value: "mango" },
//           { label: "Strawberry 🍓", value: "strawberry", disabled: true },
//         ];

//    const [selected, setSelected] = React.useState([]);

const ocupacion = [
  "Profesionista",
  "Comerciante",
  "Ama de casa",
  "Deportista",
  "Campesino",
  "Chofer",
  "Servidor público",
  "Estudiante",
  "Otro(s)",
];

class DatosView extends Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.onChange = this.onChange.bind(this);
  }

  addData(event) {
    console.log("Agregar datos");
    event.preventDefault();
    console.log(this);
  }

  onChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }

    if (e.target.value > 120) {
      alert("Edad inválida");
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <div className="css-datos">
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
 <h8>Para fortalecer la producción de aguacate, será importante impulsar el consumo interno, mejorar la infraestructura logística, el transporte y la mano de obra calificada. Queremos apoyar este crecimiento y la promesa de una vida mejor para los agricultores del país.</h8>
        {/* <h1>{this.props.name}</h1>
        <form autoComplete="off" onSubmit={this.addData}>
          <table>
            <tr>
              <td>
                <tr>
                  <TextField
                    label="Nombre(s)"
                    type="text"
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
                <tr>
                  <TextField
                    label="Apellido materno"
                    type="text"
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
                <tr>
                  <TextField
                    label="Apellido paterno"
                    type="text"
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
                <tr>
                  <TextField
                    label="Correo electrónico"
                    type="email"
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
                <div>
                  <TextField
                    label="Número telefónico"
                    type="phone"
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <tr>
                  <TextField
                    paceholder=""
                    label="Fecha de nacimiento"
                    type="date"
                    margin="normal"
                    variant="outlined"
                  />
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>
                <h8>Ocupación:</h8>
                <Dropdown
                  options={ocupacion}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 150 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Combo box"
                      variant="outlined"
                    />
                  )}
                />
                <tr>
                  <img src={imgDatos} className="App-logo" alt="imgDatos" />
                </tr>
                <tr>
                  <Link to="/">
                    <Button
                      className="css-ButtonSave"
                      variant="contained"
                      color="default"
                      size="bigger"
                    >
                      Guardar los datos del paciente
                    </Button>
                  </Link>
                </tr>
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td> */}
                {/* <div>
                    <h1>Select Fruits</h1>
                    <pre>{JSON.stringify(selected)}</pre>
                    <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={"Select"}
                    />
                </div> */}
              {/* </td>
            </tr>
          </table>
              </form> */}
              </div> 
    ); 
  
    }
}

export default DatosView;
