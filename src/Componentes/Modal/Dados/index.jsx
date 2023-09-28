import styled from "styled-components"
import { Dados } from "../../UserData/user"
import CoresTemaEscuro from "../../../Colors/cores"

const CoitainerGeral =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    border: 2px solid ${CoresTemaEscuro.corBackgroundBotoes};
    padding: 20px;

    h2{
        color: ${CoresTemaEscuro.corBackgroundBotoes};
    }
`
const CoitainerNome =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const CoitainerEmpresa =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const CoitainerTerreiros =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const CoitainerCNPJ =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`



const DadosComponente = () => {
    return(
        <CoitainerGeral>
            <CoitainerNome>
                <h2>Nome:</h2>
                <p>{Dados.Usuario.Nome}</p>
            </CoitainerNome>
           <CoitainerEmpresa>
                <h2>Empresa:</h2>
                <p>{Dados.Usuario.Empresa}</p>
           </CoitainerEmpresa>
            <CoitainerTerreiros>
                <h2>QT de Terreiros:</h2>
                <p>{Dados.Usuario.Quantidade_Terrenos}</p>
            </CoitainerTerreiros>
            <CoitainerCNPJ>
                <h2>CNPJ:</h2>
                <p>{Dados.Usuario.CNPJ}</p>   
            </CoitainerCNPJ>         
        </CoitainerGeral>
    )
}

export default DadosComponente