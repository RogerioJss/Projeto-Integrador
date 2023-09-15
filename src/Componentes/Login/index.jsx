import styled from "styled-components";
import CoresTemaEscuro from "/src/colors/cores.js"
import InputText from "../Imputs";
import IconeInput from "../Imputs/IconeInputs";
import SVGS from "../../SVGS/svgs";
import Links from "../Links";
import ButtonEntrar from "./ButtonEntrar";
import ButtonMostrarSenha from "./ButtonMostrarSenha";
import React, { useState } from 'react';


const DivLogin = styled.div`
    background-color: ${CoresTemaEscuro.corDivs};
    width: 40vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 27px;
   
    button{
        margin: 0 58px;
        transition: transform 0.3s ease;
    }

    button:hover{
        transform: scale(1.1);
        color: ${CoresTemaEscuro.corHover};
    }

    a{
        margin: 0 58px;
        transition: transform 0.3s ease;
    }

    a:hover{
        transform: scale(1.1);
        color: ${CoresTemaEscuro.corHover};
    }

    img{
        width: 277px;
        height: 233px;
        margin: 0 58px;
    }

    input{
        margin: 0 58px;
    }

    div{
        transition: transform 0.3s ease;
    }

    div:hover{
        transform: scale(1.1);
    }
`
const DivEstilizada = styled.div`
    
    
`

const Login = () => {
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const handleMostrarSenha = () => {
        setSenhaVisivel(!senhaVisivel);
    };
    return(
    <DivLogin>
        <img src="/src/assets/logo.png" alt="" />
        <DivEstilizada>
            <InputText placeholder={"Digite seu email"} type={"email"}/>
            <IconeInput src={SVGS.UserIcon} id={"userIcon"} /> 
        </DivEstilizada>
        <DivEstilizada>
            <InputText placeholder={"Digite sua senha "}  type={senhaVisivel ? "text" : "password"} id={"senha"}/>
            <IconeInput src={SVGS.SenhaIcon} id={"senhaIcon"}/> 
            <ButtonMostrarSenha onClick={handleMostrarSenha} src={senhaVisivel ? SVGS.MostrarSenhaVisivel : SVGS.MostrarSenhaIcon}/>
        </DivEstilizada>
        <Links href={"#"} target={"_blank"}>
                Esqueceu sua senha?
        </Links>
        <ButtonEntrar  >
            ENTRAR
        </ButtonEntrar>
    </DivLogin>

)
}


export default Login