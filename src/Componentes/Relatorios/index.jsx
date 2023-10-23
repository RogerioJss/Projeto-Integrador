import Header from "../BarraNavecao"
import CriarRelatorios from "./CriarRelatorios"
import PesquisarRelatorios from "./PesquisarRelatorios"




const Relatorios = () => {
    return(
        <div id="relatorios21" className="">
            <Header/>
            <PesquisarRelatorios/>
            <CriarRelatorios/>
        </div>
        
    )
}

export default Relatorios