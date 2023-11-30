import styled from "styled-components"

const TextoEstilizado = styled.p`
    font-size: ${props => props.font};
    position: ${props => props.position};
    bottom: 0;
   
`

const Texto = ({font, position,children}) =>{
    return(
        <TextoEstilizado font={font} position={position}>
            {children}
        </TextoEstilizado>
    )
}

export default Texto