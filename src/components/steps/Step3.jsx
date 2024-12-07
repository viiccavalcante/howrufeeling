import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const DivThisOrThat = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const LeftFeeling = styled(motion.div)`
  flex: 1; 
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #96add6;
  border: 1px solid #ddd; 
  padding: 20px; 
`;

const RightFeeling = styled(motion.div)`
  flex: 1;
  background: #96add6; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid #ddd; 
  padding: 20px;
`;

const Option = styled.h2`
  font-weight: bold;
`;

const Step3 = ({selectedFeelings, thisOrThat}) => {
  const [leftFeeling, setLeftFeeling] = useState(null);
  const [rightFeeling, setRightFeeling] = useState(null);

  useEffect(() => {
    if (selectedFeelings.length >= 2) {
      setLeftFeeling(selectedFeelings[0]);
      setRightFeeling(selectedFeelings[1]);
    }
  }, [selectedFeelings]);

  return (
    <>
      <DivThisOrThat>
        <LeftFeeling onClick={() => thisOrThat(rightFeeling)}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}>
          <Option>{leftFeeling}</Option>
        </LeftFeeling>
        <RightFeeling onClick={() => thisOrThat(leftFeeling)}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}>
          <Option>{rightFeeling}</Option>
        </RightFeeling>
      </DivThisOrThat>
    </>
  );
};
  
export default Step3;
  