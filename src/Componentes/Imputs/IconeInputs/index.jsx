import styled from "styled-components"

const Icone = styled.img`
`
const IconeInput = ({src, id, className}) => {
    return(
        <Icone src={src} className={className} id={id} />
    )
}

export default IconeInput