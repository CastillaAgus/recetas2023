import { get } from "../../utils/httpCliente";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const ConsultaIngredientes = () => {
  const [ingrediente, setIngrediente] = useState("");
  const [ingrediente2, setIngrediente2] = useState("");
  const [ingrediente3, setIngrediente3] = useState("");
  const navigate = useNavigate();

  const apiKey = "06c72c72f57643c78a666296fcacf2ce"; // Reemplaza con tu clave de API válida

  const createConsulta = async (e) => {
    e.preventDefault();

    const ingredientes = [ingrediente, ingrediente2, ingrediente3]
      .filter(Boolean) // Filtrar ingredientes vacíos
      .join(",");

    if (ingredientes) {
      try {
        const response = await get(
          `/recipes/findByIngredients?ingredients=${ingredientes}&apiKey=${apiKey}`
        );
        console.log(response);

        // Lógica adicional para manejar la respuesta, por ejemplo, redirigir a una página de resultados
        navigate(`/resultados?ingredientes=${ingredientes}`);
      } catch (error) {
        console.error("Error al realizar la consulta:", error);
        // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
    } else {
      console.warn("Ingresa al menos un ingrediente");
      // Puedes mostrar un mensaje al usuario indicando que al menos un ingrediente debe ser ingresado
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Ingrese Ingredientes:</h1>
          <form onSubmit={createConsulta}>
                        <div className="mb-3">
                            <label className="form-label">Ingrediente 1: </label>


                            <input
                                value={ingrediente}
                                onChange={(e) => setIngrediente(e.target.value)}
                                className="form-control"
                                placeholder={ingrediente}
                                type="text" />


                        </div>


                        <div className="mb-3">
                            <label className="form-label">Ingrediente 2: </label>


                            <input
                                value={ingrediente2}
                                onChange={(e) => setIngrediente2(e.target.value)}
                                className="form-control"
                                placeholder={ingrediente2}
                                type="text" />


                        </div>


                        <div className="mb-3">
                            <label className="form-label">Ingrediente 3: </label>


                            <input
                                value={ingrediente3}
                                onChange={(e) => setIngrediente3(e.target.value)}
                                className="form-control"
                                placeholder={ingrediente3}
                                type="text" />


                        </div>
                        <button type="submit" className="btn btn-primary">Consultar Ingrediente</button>
                    </form>
        </div>
      </div>
    </div>
  );
};