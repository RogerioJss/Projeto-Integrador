import styled from "styled-components"
import CoresTemaEscuro from "/src/colors/cores.js"
import Login from "./Componentes/Login"
import EstilosGlobais from "./Componentes/EstilosGlobais/estilosGlobais"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "./Componentes/Home"


function App() {
  
  return (
    <Router>
      <div>
        <EstilosGlobais/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Projeto-Integrador" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
