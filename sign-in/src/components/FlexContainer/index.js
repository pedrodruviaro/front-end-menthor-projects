import styled from "styled-components";

const FlexContainer = styled.section`
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row"};
    align-items: ${props => props.align ? props.align : "center"};
    justify-content: ${props => props.justify ? props.justify : "center"};
    padding: 1rem;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    @media (max-width: 900px){
        height: fit-content;
        padding: 0;
    }
`

export default FlexContainer