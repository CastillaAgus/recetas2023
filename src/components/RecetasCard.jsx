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
//import React from "react";
import { Link } from "react-router-dom"; //elimino useLocation dentro de los {}
import "./RecetasCard.css";
//import "./RecetasGrid.css";

export const RecetasCard = ({ receta }) => {
  const imgURL = `${receta.image}`;
  //const location = useLocation();

  return ( //es la grilla de RecetasGrid.jsx
    
    <li className="recetasCard">{/*Lista de las 10 recetas*/}
      
      <Link to={`/receta/${receta.id}`}>
        <img className="recetaImage" src={imgURL} alt={receta.title} />
        <div>{receta.title}</div> {/* Titulo de cada receta */}
      </Link>

      
    </li>
   
  );
};