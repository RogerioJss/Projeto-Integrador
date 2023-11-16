import Header from "../BarraNavecao"
import Conteudo from "../ConteudoHome"


const Home = () => {
    return(
        <div id="meuElemento" className="">
            <Header/>
            <Conteudo status1={'LIGAR'}/>
        </div>
    )
}

export default Home