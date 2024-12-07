import { useState, useEffect } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const App = () => {
  const feelings =["Joy", "Excitement", "Love", "Gratitude", "Contentment",
    "Pride", "Hope", "Curiosity", "Peace", "Inspiration",
    "Confidence", "Enthusiasm", "Relief", "Amusement",
    "Awe", "Optimism", "Compassion", "Satisfaction"];

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFeelings, setSelectedFeelings] = useState([]);
  const [activeFeelings, setActiveFeelings] = useState(feelings);
  const [currentFeeling, setCurrentFeeling] = useState(activeFeelings[0]);
  ///const [discardedFeeling, setDiscardedFeeling] = useState('');

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

  /////
  //tirar o nome "feeling" na frente de todos os metodos
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
      console.log(discardedFeeling);
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
    <div>
      {renderStep()}
    </div>
  
       

    </>
  );
};

export default App;
