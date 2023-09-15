import styled from "styled-components";
import CoresTemaEscuro from "/src/colors/cores.js"
import InputText from "../Imputs";
import IconeInput from "../Imputs/IconeInputs";
import SVGS from "../../SVGS/svgs";
import Links from "../Links";
import ButtonEntrar from "./ButtonEntrar";
import ButtonMostrarSenha from "./ButtonMostrarSenha";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

const DivLogin = styled.div`
    background-color: ${CoresTemaEscuro.corDivs};
    width: 55vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 33px;
    margin: auto;
   
    button{
        transition: transform 0.3s ease;
    }

    button:hover{
        transform: scale(1.1);
        color: ${CoresTemaEscuro.corHover};
    }

    a{
        transition: transform 0.3s ease;
    }

    a:hover{
        transform: scale(1.1);
        color: ${CoresTemaEscuro.corHover};
    }

    img{
        width: 277px;
        height: 233px;
    }

    div{
        transition: transform 0.3s ease;
    }

    div:hover{
        transform: scale(1.1);
    }
`
const DivEstilizada = styled.div`
   position: relative;
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
            <IconeInput src={SVGS.UserIcon} id={"userIcon"} className={"icones"} /> 
        </DivEstilizada>
        <DivEstilizada>
            <InputText placeholder={"Digite sua senha "}  type={senhaVisivel ? "text" : "password"} id={"senha"}/>
            <IconeInput src={SVGS.SenhaIcon} id={"senhaIcon"} className={"icones"}/> 
            <ButtonMostrarSenha onClick={handleMostrarSenha} src={senhaVisivel ? SVGS.MostrarSenhaVisivel : SVGS.MostrarSenhaIcon} id={"mostrarSenha"} className={"icones"}/>
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