import styled from "styled-components";
import FlexContainer from "../components/FlexContainer";

const FormContainer = styled(FlexContainer).attrs({as: "form"})`
    background-color: #fff;
    height: fit-content;
    width: 450px;
    padding: 2rem;
    border-radius: 8px;

    @media (max-width: 900px){
        width: fit-content;
    }
`

export default FormContainer;