import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ReactPlayer from 'react-player'

class CrecimientoView extends Component {
  state = {};
  render() {
    return (
      <div className="css-crecimiento">
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
  
        <font size="6" face="Gabriola" color="black">Es muy importante conocer qué prácticas hacer en cada etapa de crecimiento del árbol:

El establecimiento del cultivo comienza en la siembra y se caracteriza por el crecimiento vegetativo,  en esta etapa debo enfocar el árbol a la producción de nuevos cogollos, estos cogollos son bronceados  y su intensidad en color varía según cada variedad; con el paso del tiempo el color de la hoja pasa a ser “verde claro” y este es el color que debe predominar en el árbol. Debemos estimular siempre la producción de cogollos, protección de las hojas del ataque de plagas o enfermedades y no ilusionarnos por floraciones que no son significativas en esta etapa, solo  hasta que el árbol alcance la copa deseada (el árbol debe ser más ancho que alto).

Una vez tengo formada la copa, inicia el ciclo productivo. Todo comienza con un cogollo marrón, que a medida que se desarrolla se torna de un color “verde biche”, este color predomina en el crecimiento vegetativo y de estos cogollos saldrán las próximas cosechas. A medida que pasa el tiempo este color es reemplazando por un “verde oscuro”, que marca la cuota inicial para la floración. En este momento muchos se confunden o se desvían del camino, porque aparecen yemas en las ramas que tienen la facultad de ser vegetativas o reproductivas según los estímulos nutricionales, hídricos y climáticos a que sean  sometidos los árboles. Es una etapa lenta y puede durar 2-3 meses, las hojas cada vez son más oscuras, acartonadas, toman forma en V y al apretar la hoja esta cruje, es cuando se dice que la hoja esta “hecha” y sus yemas aumentan de tamaño preparándose para florecer. En esta etapa es importante estar atento en el monitoreo de ácaro o arañita roja, pues puede estar aumentando sus poblaciones y generar  la defoliación del árbol.

La floración inicia con yemas cada vez más grandes y gruesas, luego pasan de yemas de latencia a yemas de diferenciación floral (yema hinchada). Al cabo de 1-2 meses aparecen las primeras inflorescencias, dando apertura a los botones florales y a las flores; esta es  la etapa más importante para un productor de aguacate porque de un adecuado cuajamiento depende el éxito del proyecto.

En floración el árbol demanda la gran mayoría de nutrientes, especialmente elementos menores y N+P+Ca, para garantizar su disponibilidad debo aplicar unos días antes de iniciar la prefloración. 

La etapa final de llenado de fruta dura aproximadamente de 4-7 meses dependiendo de la variedad y  de las condiciones climáticas; en ese momento debemos aumentar gradualmente la cantidad de fertilizante según el crecimiento del fruto, pues esta etapa requiere de todos los elementos especialmente N+K+Ca+Mg.</font>
        
      </div>
    );
  }
}

export default CrecimientoView;
