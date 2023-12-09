import React, { useState } from 'react';
import axios from 'axios';


export const ConsultaIngredientes = () => {
  const [ingrediente, setIngrediente] = useState('');
  const [recetaEncontrada, setRecetaEncontrada] = useState(null);

  const handleInputChange = (e) => {
    setIngrediente(e.target.value);
  };

  const buscarReceta = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingrediente}&apiKey=06c72c72f57643c78a666296fcacf2ce`
      );
      // Muestra todo el objeto JSON en la consola
      console.log('Respuesta de la API:', response.data);

      // Suponiendo que solo queremos la primera receta encontrada
      const primeraReceta = response.data[0];
      
      // Muestra la receta encontrada en la consola
      console.log('Receta Encontrada:', primeraReceta);

      // Actualiza el estado para mostrar la receta encontrada en la interfaz si es necesario
      setRecetaEncontrada(primeraReceta);
    } catch (error) {
      console.error('Error al buscar receta por ingrediente:', error);
    }
  };

  return (
    <div className='Buscador'>
      <h2>Consulta de Recetas por Ingrediente</h2>
      <div>
        <label htmlFor="ingrediente">Ingrediente:</label>
        <input
          type="text"
          id="ingrediente"
          value={ingrediente}
          onChange={handleInputChange}
        />
        <button onClick={buscarReceta}>Buscar Receta</button>
      </div>

      {recetaEncontrada && (
        <div>
          <h3>Receta Encontrada:</h3>
          <p>{recetaEncontrada.title}</p>
          {/* Para mostrar más detalles de la receta si es necesario */}
        </div>
      )}
    </div>
  );
};

