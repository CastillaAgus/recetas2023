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
    <li className="recetasCard">
      <Link to={`/receta/${receta.id}`}>
        <img className="recetaImage" src={imgURL} alt={receta.title} />
        <div>{receta.title}</div>
      </Link>

      {/* Renderiza el botón solo si no estás en la página principal */}
      {location.pathname !== "/" && (
        <Link to="/">
          <button className="volverButton">Volver a todas las recetas</button>
        </Link>
      )}
    </li>
  );
};