import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: white;
        font-family: sans-serif;
    }
`;
const Card = styled.div`
    position: absolute;  
    top: 50%;          
    left: 50%;           
    transform: translate(-50%, -50%);
    background: #e8e4c7;
    max-width: 500px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.24);
    border-radius: 15px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #96add6;
`;

//#577c8e;
const Button = styled.button`
    background: ${(props) => props.color || '#97B770'};  /* Agora usa a cor passada como prop */
    font-weight: bold;
    color: white;
    outline: 0;
    border-radius: 7px;
    padding: 10px 30px;
    font-size: 17px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
        background: ${(props) => props.secondColor || '#608334'};
    }
`;


export  {GlobalStyle, Card, Title, Button};
