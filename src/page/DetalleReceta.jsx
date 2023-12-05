
import { get } from "../../utils/httpCliente";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom"
import "./DetalleReceta.css"

// https://api.spoonacular.com/recipes/{id}/information
// /recipes/{id}/information

export const DetalleReceta = () => {
    const [receta, setReceta] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        get(`/recipes/${id}/information`).then((data) => {
            console.log(data)
            setReceta(data)
        })
    }, [id])

    if (!receta) {
        return null;
    }

    return (
        <div className="contenedorDetalle">
            <img className="col" src={receta.image} alt={receta.title} />
            <div className="recetadetalle col">
                <p className="item">
                    <strong>Receta: </strong>{receta.title} </p>
                    <p><strong>Tipos de platos: </strong>{receta.dishTypes.map((dishType) => dishType).join(", ")}</p>
                    
                    <p><strong>Ingredientes: </strong>{receta.extendedIngredients.map((extendedIngredient) => extendedIngredient.aisle).join(", ")}</p>

                    <p><strong>Instrucciones: </strong>{receta.instructions}</p>
            </div>
        </div>
    )
}