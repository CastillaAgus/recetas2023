import "./App.css";
import { LandingPage } from "./page/LandingPage";
import { DetalleReceta } from "./page/DetalleReceta";

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

// import { RecetasGrid } from "./components/RecetasGrid.jsx"



export const App = ()=>{
  return(
    <BrowserRouter>
      <header >
       <Link to="/" > <a >
       <h1 className="title">Recetas</h1> 
      </a> </Link>
      </header>
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/receta/:id" element = {<DetalleReceta/>}/>
        <Route path="consultaingredientes" element= {<ingrediente/>}/>
     
      </Routes>
    </BrowserRouter>
  )
}