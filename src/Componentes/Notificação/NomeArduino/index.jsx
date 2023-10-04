import styled from "styled-components"

const TituloEstilizado = styled.h1`
    font-size: 30px;
`

const NomeArduino = ({children}) =>{
    return(
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
    )
}

export default NomeArduino