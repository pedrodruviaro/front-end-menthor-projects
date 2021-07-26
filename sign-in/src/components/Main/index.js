import styled from "styled-components";

const Main = styled.main `
    width: 100vw;
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
    @media (max-width: 900px){
        flex-direction: column;
        height: fit-content;
        text-align: center;
    }
`

export default Main