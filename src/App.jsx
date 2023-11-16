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
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/Relatorios" element={<Relatorios/>}/>
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
