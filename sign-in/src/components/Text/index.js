import styled from "styled-components";

const Text = styled.p`
    font-size: ${props => props.size ? props.size : "16px"};
    font-weight: 400;
    display: inline;
    text-align: ${props => props.left ? "left" : props.right ? "right" : "center"};
    padding: ${props => props.padding ? props.padding : "1rem 0"};
    color: ${props => props.color? props.color : "#fff"};

`

export default Text