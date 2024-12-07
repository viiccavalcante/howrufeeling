import { Title, Button } from "../GlobalStyle";
import styled from "styled-components";

const Feeling = styled.h2`
  color: #577c8e;
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
        {selectedFeelings.map((feeling) => (
          <Feeling>{feeling}</Feeling>
        ))}
      </ScrollDiv>
      <Button onClick={onNext}>Next</Button>
    </>
  )
};
  
export default Step2;
  