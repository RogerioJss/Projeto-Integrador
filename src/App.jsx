import styled from "styled-components"
import CoresTemaEscuro from "/src/colors/cores.js"
import Login from "./Componentes/Login"
import EstilosGlobais from "./Componentes/EstilosGlobais/estilosGlobais"
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./Componentes/Home"
import Relatorios from "./Componentes/Relatorios"


function App() {
  
  return (
    <Router>
      <div>
        <EstilosGlobais/>
        <Routes>
          <Route path="/Projeto-Integrador/login" element={<Login/>}/>
          <Route path="/Projeto-Integrador" element={<Home/>}/>
          <Route path="/Projeto-Integrador/Relatorios" element={<Relatorios/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
