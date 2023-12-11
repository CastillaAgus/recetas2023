import {Link} from "react-router-dom"

import "./ConsultaCard.css"

export const ConsultaCard = ({ consulta }) => {
  
  const imgURL=`${consulta.image}`;
  return (
    <li className="consultaCard">
      <Link to={`/receta/${consulta.id}`}>
      <img className="recetaImage" src={imgURL} alt={consulta.title} />
      <div className="titulo">{consulta.title}</div>
      
      </Link>
    </li>
  );
};
