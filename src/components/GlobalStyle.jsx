import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: #e8e8e8;
        font-family: sans-serif;
    }
`;

const Card = styled.div`
    position: absolute;  
    top: 50%;          
    left: 50%;           
    transform: translate(-50%, -50%);
    background: white;
    margin: 0 auto 100px;
    width: 500px;
    height: 400px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.24);
    border-radius: 15px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #96add6;
`;

const Button = styled.button`
    background: white;
    font-weight: bold;
    color: ${(props) =>  props.color || '#608334'};
    outline: 0;
    border: 3px solid ${(props) =>  props.color || '#608334'}; 
    border-radius: 10px;
    padding: 10px 30px;
    font-size: 17px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
        background: ${(props) => props.secondColor || '#608334'};
        border-color: ${(props) => props.secondColor || '#608334'};
        color: white;
    }
`;

export  {GlobalStyle, Card, Title, Button};
