import { Title, Button } from "../GlobalStyle";
import { styled } from "styled-components";

const Feeling = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #577c8e;
  text-align: center;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 100%;
`;

function Step1({ currentFeeling, select, discard, reconsider }) {

  return (
    <>
      <Container>
        <Title>How are you feeling?</Title>
        <div>
          <Feeling>{currentFeeling}</Feeling>
        </div>
        <ButtonsDiv>
          <Button onClick={select}>Yes</Button>
          <Button color='#96add6' secondColor='#577c8e' onClick={reconsider}>Maybe</Button>
          <Button color='#e57373' secondColor='#d32f2f' onClick={discard}>No</Button>
        </ButtonsDiv>
      </Container>
    </>
  );
}

export default Step1;