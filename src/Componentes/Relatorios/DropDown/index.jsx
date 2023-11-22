import styled from "styled-components"
const Select = styled.select`
width: 100%;
@media (min-width: 768px) {
    width: 50%;
    }
height: 5rem;
border-radius: 10px;
text-align: center;
font-size: 1.5rem;

`
const Option = styled.option`
`

const Dropdown = () => {
    let opcoes = [
        {
        setOpcoes:`Selecionar Terreiro`    
    },
        {
        setOpcoes:`terreiro1`
    }, {
        setOpcoes:`terreiro2`
    }]
    return(
        <Select>
            {opcoes.map((opcao,index)=><Option key={index}>{opcao.setOpcoes}</Option>)}
        </Select>
    )
}

export default Dropdown