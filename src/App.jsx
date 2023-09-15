import styled from "styled-components"
import CoresTemaEscuro from "/src/colors/cores.js"
import Login from "./Componentes/Login"
import EstilosGlobais from "./Componentes/EstilosGlobais/estilosGlobais"

const Fundo = styled.div`
  background-color: ${CoresTemaEscuro.corDeFundo};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `
function App() {
  
  return (
    <Fundo>
      <EstilosGlobais/>
      <Login/>
    </Fundo>
  )
}

export default App
