import styled from "styled-components"


const TextosInferioresEstilizados = styled.p`
    color: black;
    font-size: 30px;
`

const TextosInferiores = ({children}) => {
    return(
        <TextosInferioresEstilizados>
            {children}
        </TextosInferioresEstilizados>
    )
}


export default TextosInferiores