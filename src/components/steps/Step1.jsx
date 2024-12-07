import { Title, Button } from "../GlobalStyle";
import { styled } from "styled-components";

function Step1({ currentFeeling, select, discard, reconsider }) {

  const Feeling = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    color: #577c8e;
    margin: 20px 0;
  `;

  const ButtonsDiv = styled.div`
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
  `;


  return (
    <>
    <Title>How are you feeling?</Title>
    <div>
      <Feeling>{currentFeeling}</Feeling>
    </div>
    <ButtonsDiv>
      <Button onClick={select}>Yes</Button>
      <Button color='#96add6' secondColor='#577c8e' onClick={reconsider}>Maybe</Button>
      <Button color='#e57373' secondColor='#d32f2f' onClick={discard}>No</Button>
    </ButtonsDiv>
  </>
  );
}


export default Step1;