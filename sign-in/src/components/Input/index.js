import styled from "styled-components";


const Input = styled.input `
    width: 100%;
    padding: .75rem 1rem;
    font-size: 1rem;
    color: #333;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    margin-bottom: 1rem;
    transition: all .3s ease;

    ::placeholder {
        color: #777;
        font-size: .9rem;
    }

    &:active,
    &:focus {
        border: 1px solid #555;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
`

export default Input