import React, { useState } from 'react';
import axios from 'axios';
import "./ConsultaIngredientes.css";

export const ConsultaIngredientes = () => {
  const [ingrediente, setIngrediente] = useState('');
  const [recetaEncontrada, setRecetaEncontrada] = useState(null);

  const manejo = (e) => {
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
    <div>
      {/* <header>
        <h1>Recetas</h1>
      </header> */}
      <div className='Orden'>
        <div >
        <h2 >Consulta de Recetas por Ingrediente</h2>
        <div className='Busca'>
        <span class="icon"><i class="fa fa-search"></i></span>
          <input
            type="search" placeholder='Ingrese ingrediente'
            value={ingrediente}
            onChange={manejo}
          />
          <button class="button-34" role="button" onClick={buscarReceta}>Buscar Receta</button>
          </div>
        </div>

        {recetaEncontrada && (
          <div>
            <h3>Receta Encontrada:</h3> 
            <p>{recetaEncontrada.title}</p>
            
          </div>
        )} 
      </div>
    </div>
  );
};