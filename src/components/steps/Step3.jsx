//colocar animação quando selecionar, talvez colocar tempo
import { useState, useEffect } from "react";

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
    <div style={styles.container}>
      <div style={styles.left} onClick={() => thisOrThat(rightFeeling)}>
        <p>{leftFeeling}</p>
      </div>
      <div style={styles.right} onClick={() => thisOrThat(leftFeeling)}>
        <p>{rightFeeling}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh", 
  },
  left: {
    flex: 1, 
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flex: 1, 
    backgroundColor: "#e0e0e0", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
  
  export default Step3;
  