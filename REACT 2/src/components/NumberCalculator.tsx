import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNumbers } from '../services/api';
import { CalculatorState, NumberType } from '../types';

const WINDOW_SIZE = 10;

const NumberCalculator: React.FC = () => {
  const { numberType } = useParams<{ numberType: string }>();
  const [state, setState] = useState<CalculatorState>({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [],
    avg: 0
  });

  const calculateAverage = (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return Number((sum / numbers.length).toFixed(2));
  };

  const updateWindow = (newNumbers: number[], prevWindow: number[]) => {
    const uniqueNumbers = Array.from(new Set([...prevWindow, ...newNumbers]));
    const windowCurrState = uniqueNumbers.slice(-WINDOW_SIZE);
    return windowCurrState;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!numberType || !['p', 'f', 'e', 'r'].includes(numberType)) {
        return;
      }

      const numbers = await fetchNumbers(numberType as NumberType);
      const windowPrevState = [...state.windowCurrState];
      const windowCurrState = updateWindow(numbers, state.windowCurrState);
      const avg = calculateAverage(windowCurrState);

      setState({
        windowPrevState,
        windowCurrState,
        numbers,
        avg
      });
    };

    fetchData();
  }, [numberType]);

  return (
    <div className="calculator-container">
      <h2>Number Type: {numberType}</h2>
      <div className="result">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
};

export default NumberCalculator; 