import {Link} from "react-router-dom"

import "./RecetasCard.css"

export const RecetasCard = ({ receta }) => {
  
  const imgURL=`${receta.image}`;
  return (
    <li className="recetasCard">
      <Link to={`/receta/${receta.id}`}>
      <img className="recetaImage" src={imgURL} alt={receta.title} />
      <div className="titulo">{receta.title}</div>
      
      </Link>
    </li>
  );
};
