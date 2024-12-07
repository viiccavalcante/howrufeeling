import { Title, Button } from "../GlobalStyle";
///import styled from "styled-components";


const Feeling = ({ feeling }) => (
    <p>{feeling}</p>
);

const Step2  = ({ selectedFeelings, onNext }) => {
    return (
        <>
          <Title>You may be feeling:</Title>
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
  