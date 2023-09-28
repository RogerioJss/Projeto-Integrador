import styled from "styled-components";



const TextosSuperioresEstilizados = styled.h3`
    color: black;
    font-size: 40px;
`

const TextosSuperiores = ({children}) => {
    return(
        <TextosSuperioresEstilizados>
            {children}
        </TextosSuperioresEstilizados>
    )
}

export default TextosSuperiores