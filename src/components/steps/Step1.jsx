import { Title, Button } from "../GlobalStyle";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 100%;
`;

const Feeling = styled(motion.h2)`
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

function Step1({ currentFeeling, select, discard, reconsider }) {

  return (
    <>
      <Container>
        <Title>How are you feeling?</Title>
        <motion.div
          key={currentFeeling} 
          initial={{ opacity: 0 }}     
          animate={{ opacity: 1 }}    
          transition={{ duration: 2 }} 
        >
          <Feeling>{currentFeeling}</Feeling>
        </motion.div>
        <ButtonsDiv>
          <Button onClick={select} >Yes</Button>
          <Button color='#96add6' secondColor='#577c8e' onClick={reconsider}>Maybe</Button>
          <Button color='#e57373' secondColor='#d32f2f' onClick={discard}>No</Button>
        </ButtonsDiv>
      </Container>
    </>
  );
}

export default Step1;