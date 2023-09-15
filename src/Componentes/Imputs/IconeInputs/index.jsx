import styled from "styled-components"

const Icone = styled.img`
`
const IconeInput = ({src, id}) => {
    return(
        <Icone src={src} className="icones" id={id} />
    )
}

export default IconeInput