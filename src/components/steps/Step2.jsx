import { Title, Button } from "../GlobalStyle";
import styled from "styled-components";
import { motion } from "framer-motion";

const Feeling = styled(motion.h2)`
  color: #577c8e;
  margin: 5px 0;
`;

const ScrollDiv = styled.div`
  max-height: 250px; 
  overflow-y: auto; 
  padding: 10px;
  border: 1px solid #ddd; 
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Step2  = ({ selectedFeelings, onNext }) => {

  return (
    <>
      <Title>You may be feeling:</Title>
      <ScrollDiv>
        {selectedFeelings.map((feeling, index) => (
          <Feeling
            key={feeling}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            {feeling}
          </Feeling>
        ))}
      </ScrollDiv>
      <Button onClick={onNext}>Next</Button>
    </>
  )
};
  
export default Step2;
  