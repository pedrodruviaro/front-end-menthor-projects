import styled from "styled-components";


const Title = styled.h1`
    font-size: ${props => props.size ? props.size : "2rem"};
    font-weight: 700;
    text-align: ${props => props.left ? "left" : props.right ? "right" : "center"};
    padding: ${props => props.padding ? props.padding : "1rem 0"};
`

export default Title