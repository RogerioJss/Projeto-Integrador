import { useState } from "react"
import styled from "styled-components"
const Select = styled.select`
width: 50%;
height: 5rem;
border-radius: 10px;
text-align: center;
font-size: 2rem;

`
const Option = styled.option`
`

const Dropdown = ({setOpcoes}) => {
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
            {opcoes.map(opcao=><Option>{opcao.setOpcoes}</Option>)}
        </Select>
    )
}

export default Dropdown