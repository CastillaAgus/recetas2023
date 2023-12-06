// import {Link} from "react-router-dom"

// import "./RecetasCard.css"

// export const RecetasCard = ({ receta }) => {
  
//   const imgURL=`${receta.image}`;
//   return (
//     <li className="recetasCard">
//       <Link to={`/receta/${receta.id}`}>
//       <img className="recetaImage" src={imgURL} alt={receta.title} />
//       <div>{receta.title}</div>
//       </Link>

     
//     </li>
//   );
// };



//2
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./RecetasCard.css";
import "./RecetasGrid.css";

export const RecetasCard = ({ receta }) => {
  const imgURL = `${receta.image}`;
  const location = useLocation();

  return (
    
    <li className="recetasCard">{/*Lista de las 10 recetas*/}
      
      <Link to={`/receta/${receta.id}`}>
        <img className="recetaImage" src={imgURL} alt={receta.title} />
        <div>{receta.title}</div> {/* Titulo de cada receta */}
      </Link>

      
    </li>
   
  );
};