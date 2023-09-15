import styled from "styled-components"
import CoresTemaEscuro from "../../Colors/cores"

const LinksEstilizados = styled.a`
    color: ${CoresTemaEscuro.corTextos};
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 24px;
`


const Links = ({href, target, children}) => {
    return (
        <LinksEstilizados href={href} target={target}>
            {children}
        </LinksEstilizados>
    )
}

export default Links