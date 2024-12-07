import { styled } from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #96add6;
  border-radius: 50%; 
`;

const Result = styled.h1`
  font-size: 3rem;
  color: white;
`;

const Step4 = ({selectedFeeling}) => {
  return (
    <Container
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1.6, ease: "easeOut" }}
    >
      <Result>{selectedFeeling}</Result>
    </Container>
  );
};
  
export default Step4;