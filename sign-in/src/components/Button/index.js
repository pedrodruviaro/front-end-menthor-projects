import styled from "styled-components";


const Button = styled.button`
    width: 100%;
    margin-bottom: 1rem;
    color: var(--fc-white);
    background-color: var(--fc-green);
    border: none;
    outline: none;
    font-weight: 600;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid var(--fc-green);
    padding: .8rem;
    letter-spacing: 1px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px,
    rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all .3s ease-in;

    &:hover, 
    &:focus {
        border: 2px solid var(--fc-purple);
        opacity: .9;
    }
`

export default Button