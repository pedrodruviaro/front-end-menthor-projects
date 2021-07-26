import styled from "styled-components";


const CardText = styled.h2`
    width: 450px;
    background-color: var(--fc-purple);
    text-align: center;
    font-weight: 400;
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: .9rem;

    strong {
        font-weight: 600;
    }

    @media screen and (max-width: 500px){
        width: fit-content;
    }
`

export default CardText