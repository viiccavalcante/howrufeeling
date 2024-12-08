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
  const feelings =["Happy", "Sad", "Angry", "Anxious", "Excited", "Nervous",
    "Confident", "Frustrated", "Hopeful", "Disappointed",
    "Grateful", "Overwhelmed", "Relieved", "Proud", "Embarrassed",
    "Confused", "Lonely","Joyful", "Ashamed", "Calm", "Determined",
    "Stressed", "Fearful","Energetic","Satisfied", "Curious",
    "Tense", "Helpless", "Powerful", "Guilty","Inspired", "Indifferent",
    "Irritated", "Optimistic", "Resentful", "Secure", "Surprised", "Worried",
    "Hopeful", "Relaxed", "Regretful", "Accepted", "Enthusiastic","Vulnerable",
    "Distracted", "Resigned", "Affectionate", "Passionate", "Compassionate", "Content"];

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFeelings, setSelectedFeelings] = useState([]);
  const [activeFeelings, setActiveFeelings] = useState(feelings);
  const [currentFeeling, setCurrentFeeling] = useState(activeFeelings[0]);

  useEffect(() => {

    if (activeFeelings.length > 0) {
      const position = Math.floor(Math.random() * activeFeelings.length);
      const newFeeling = activeFeelings[position];
      setCurrentFeeling(newFeeling);
      
    } else {

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

  const removeFeeling = () => {
    setActiveFeelings(activeFeelings.filter(item => item !== currentFeeling));
  };

  const select = () => {
    setSelectedFeelings([...selectedFeelings, currentFeeling]); 
    removeFeeling();    
  };

  const discard = () => {
    removeFeeling();
  };

  const reconsider = () => {
    const position = Math.floor(Math.random() * activeFeelings.length);
    const newFeeling = activeFeelings[position];
    setCurrentFeeling(newFeeling);
  };

  const thisOrThat = (discardedFeeling) =>{
    setSelectedFeelings(selectedFeelings.filter(item => item !== discardedFeeling));
  };

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
