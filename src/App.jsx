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
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/relatorios" element={<Relatorios/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
