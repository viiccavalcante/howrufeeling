///import styled from "styled-components";

const Feeling = ({ feeling }) => (
    <p>{feeling}</p>
);

const Step2  = ({ selectedFeelings, onNext }) => {
    return (
        <>
          <h1>You may be feeling:</h1>
          <div>
          {selectedFeelings.map((feeling) => (
            <Feeling key={feeling.id} feeling={feeling} />
          ))}
          </div>
          <button onClick={onNext}>Next</button>
    
        </>
      )
  };
  
  export default Step2;
  