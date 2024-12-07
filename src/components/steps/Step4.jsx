//colocar uma animação na palavra 
import { styled } from "styled-components";

const Result = styled.h1`
  font-size: 2.5rem;
  color: #96add6;
`;

const Container = styled.div` 
  justify-content: center;
`;


const Step4 = ({selectedFeeling}) => {
  return (
    <Container>
      <Result>{selectedFeeling}</Result>
    </Container>
  );
};
  
export default Step4;
  