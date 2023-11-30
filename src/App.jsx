import Login from "./Componentes/Login"
import EstilosGlobais from "./Componentes/EstilosGlobais/estilosGlobais"
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./Componentes/Home"
import Relatorios from "./Componentes/Relatorios"
import RelatorioAberto from "./Componentes/Relatorios/RelatorioAberto"
import { AppProvider } from "./Contexts/contextHome"



function App() {
  
  return (
    <AppProvider>
      <Router>
      <div>
        <EstilosGlobais/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/relatorios" element={<Relatorios/>}/>
          <Route path="/relatorios/:id" element={<RelatorioAberto/>}/>
        </Routes>
      </div>
    </Router>
    </AppProvider>
    
  )
}

export default App
