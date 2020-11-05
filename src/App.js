import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Crecimiento from './component/Actividad';
import Datos from './component/Datos';
import Content from './component/Content';
import Footer from './component/Footer';
import Comidas from './component/Comidas';
import Actividad from './component/Actividad';
import Header from './component/Header';
import Evaluacion from './component/Evaluacion';
import Videos from './component/Videos';
import Menu from './component/Menu';
import './styles/App.css';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/datos" exact component={Datos} />
          <Route path="/evaluacion" exact component={Evaluacion} />
          <Route path="/comidas" exact component={Comidas} />
          <Route path="/Crecimiento" exact component={Actividad} />
          <Route path="/actividad" exact component={Actividad} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/test" exact component={() => <h1>Principal</h1>} />
          <Route path="/mantenimiento" exact component={() => <h1>ESTAMOS EN MANTENIMIENTO</h1>} />
          <Route path="*" component={() => <h1>404 Not FOUND</h1>} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
