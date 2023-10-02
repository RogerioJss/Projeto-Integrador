import styled from "styled-components"
import CoresTemaEscuro from "/src/colors/cores.js"
import Login from "./Componentes/Login"
import EstilosGlobais from "./Componentes/EstilosGlobais/estilosGlobais"
import { BrowserRouter as Router,Routes, Route,HashRouter } from "react-router-dom"
import Home from "./Componentes/Home"


function App() {
  
  return (
    <HashRouter>
      <Router>
        <div>
          <EstilosGlobais/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Projeto-Integrador" element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </HashRouter>
  )
}

export default App
