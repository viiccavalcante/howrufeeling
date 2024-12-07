import { useState, useEffect } from "react";
import ListSelected from "./pages/ListSelected";

const App = () => {
  const feelings =["Joy", "Excitement", "Love", "Gratitude", "Contentment",
    "Pride", "Hope", "Curiosity", "Peace", "Inspiration",
    "Confidence", "Enthusiasm", "Relief", "Amusement",
    "Awe", "Optimism", "Compassion", "Satisfaction",
    "Trust", "Serenity", "Anger", "Sadness", "Fear",
    "Guilt", "Shame", "Disappointment", "Frustration",
    "Anxiety", "Loneliness", "Jealousy", "Envy",
    "Resentment", "Embarrassment", "Despair", "Grief",
    "Helplessness", "Regret", "Vulnerability", "Overwhelm", "Bitterness",
    "Nostalgia", "Confusion", "Anticipation", "Surprise", "Indifference", "Yearning",
    "Suspense", "Longing", "Restlessness","Melancholy"];

  //const [showListSelected, setShowHListSelected] = useState(false);
  const [selectedFeelings, setSelectedFeelings] = useState([]);
  const [activeFeelings, setActiveFeelings] = useState(feelings);
  const [currentFeeling, setCurrentFeeling] = useState(activeFeelings[0]);

    const generateFeeling = () => {
      const position = Math.floor(Math.random() * activeFeelings.length);
      setCurrentFeeling(activeFeelings[position]);
    };

    const removeFeeling = () => {
      setActiveFeelings(activeFeelings.filter(item => item !== currentFeeling));
    };

    const selectFeeling = () => {
      setSelectedFeelings([...selectedFeelings, currentFeeling]); 
      removeFeeling();
      generateFeeling();
    };

    const discardFeeling = () => {
      removeFeeling();
      generateFeeling();
    };

    const reconsiderFeeling = () => {
      generateFeeling();
    };


  return (
    <>
        <>
          <h1>How are you feeling?</h1>
          <div>
            <h3>{currentFeeling}</h3>
          </div>
          <button onClick={selectFeeling}>Yes</button>
          <button onClick={reconsiderFeeling}>Maybe</button>
          <button onClick={discardFeeling}>No</button>
        </>
 
 
    </>
  );
};

export default App;
