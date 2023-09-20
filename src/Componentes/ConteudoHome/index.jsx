import styled from "styled-components"
import Button from "../Button"
import ContainerConteudo from "../ContainerConteudo"

const ConteudoEstilizado = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

    button{
        transition: transform 0.3s ease;
    }

    button:hover{
        transform: scale(1.1);
    }
`

const Conteudo = () => {
    return(
    <ConteudoEstilizado>
        <ContainerConteudo/>
        <Button className="button" id="button1">Adicionar Terreiro</Button>
        <Button className="button" id="button2">Controlar Estações</Button>
    </ConteudoEstilizado>
    )
}


export default Conteudo