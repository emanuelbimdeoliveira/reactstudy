import { useState } from 'react';
import React from 'react'

import City1 from "../assets/pexels-tatiana-fet-1105766.jpg"

import ListArray from './ListArray';
import Conditionals from './Conditionals';

const FirstComponent = () => {
    let [number, setNumber] = useState(0);

    const handleActiveFunction = () => {
        setNumber((prevNumber) => {
          return prevNumber += 1
        });
    }

  return (
    <div>
        <h2>{number}</h2>
        <img src={City1} alt="city1" width="800"/>
        <button onClick={handleActiveFunction}>+</button>
        <ListArray number={number} name="Props"></ListArray>
        <Conditionals></Conditionals>
    </div>
  )
}

export default FirstComponent