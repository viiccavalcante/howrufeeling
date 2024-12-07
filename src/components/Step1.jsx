import { useState, useEffect } from "react";
//import styled from "styled-components";

function Step1({ currentFeeling, select, discard, reconsider }) {

  return (
    <>
    <h1>How are you feeling?</h1>
    <div>
      <h3>{currentFeeling}</h3>
    </div>
    <button onClick={select}>Yes</button>
    <button onClick={reconsider}>Maybe</button>
    <button onClick={discard}>No</button>
  </>
  );
}


export default Step1;