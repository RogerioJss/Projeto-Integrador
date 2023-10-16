import Header from "../BarraNavecao"
import CriarRelatorios from "./CriarRelatorios"
import PesquisarRelatorios from "./PesquisarRelatorios"




const Relatorios = () => {
    return(
        <>
        <Header/>
        <div id="relatorios21" className="">
            <PesquisarRelatorios/>
            <CriarRelatorios/>
        </div>
        </>
        
    )
}

export default Relatorios