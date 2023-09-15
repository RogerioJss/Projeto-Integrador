import { styled } from "styled-components"
import ButtonMostrarSenha from "../../Login/ButtonMostrarSenha"


const ItemNavegacao = ({onClick,src,id,className}) => {
    return(
       <ButtonMostrarSenha onClick={onClick} src={src} id={id} className={className}/>
    )
}

export default ItemNavegacao