import { useState, useEffect } from "react";
import {
  GlobalStyle,
  Card,
  Step1,
  Step2,
  Step3,
  Step4,
} from "./components";

const App = () => {
  const feelings =["Joy", "Excitement", "Love", "Gratitude", "Contentment",
    "Pride", "Hope", "Curiosity", "Peace", "Inspiration",
    "Confidence", "Enthusiasm", "Relief", "Amusement",
    "Awe", "Optimism", "Compassion", "Satisfaction"];

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFeelings, setSelectedFeelings] = useState([]);
  const [activeFeelings, setActiveFeelings] = useState(feelings);
  const [currentFeeling, setCurrentFeeling] = useState(activeFeelings[0]);

  useEffect(() => {
    if (activeFeelings.length === 0 ) {
      if(currentStep === 1){
        setCurrentStep(2);
      }
      
      if(selectedFeelings.length === 1){
        setCurrentStep(4);
      }
    }
  }, [activeFeelings, selectedFeelings]);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 5));
  };
    
  const generateFeeling = () => {
    const position = Math.floor(Math.random() * activeFeelings.length);
    setCurrentFeeling(activeFeelings[position]);
  };

  const removeFeeling = () => {
    setActiveFeelings(activeFeelings.filter(item => item !== currentFeeling));
  };

  const select = () => {
    setSelectedFeelings([...selectedFeelings, currentFeeling]); 
    removeFeeling();
    generateFeeling();
  };

  const discard = () => {
    removeFeeling();
    generateFeeling();
  };

  const reconsider = () => {
    generateFeeling();
  };

  const thisOrThat = (discardedFeeling) =>{
    setSelectedFeelings(selectedFeelings.filter(item => item !== discardedFeeling));
  };

    //console.log(activeFeelings);
    console.log(selectedFeelings);
  const renderStep = () => {
    switch (currentStep) {
      case 2:
        return <Step2 onNext={nextStep} selectedFeelings={selectedFeelings} />;
      case 3:
        return <Step3 selectedFeelings={selectedFeelings} thisOrThat={thisOrThat}/>;
      case 4:
        return <Step4 selectedFeeling={selectedFeelings}/>;
      default:
        return (
          <Step1
            currentFeeling={currentFeeling}
            select={select}
            discard={discard}
            reconsider={reconsider}
          />
        );
    }
  };
    
  return (
    <>
      <GlobalStyle />
      <Card>
        {renderStep()}
      </Card>
    </>
  );
};

export default App;
