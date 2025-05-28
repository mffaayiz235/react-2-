export interface NumberResponse {
  numbers: number[];
}

export interface CalculatorState {
  windowPrevState: number[];
  windowCurrState: number[];
  numbers: number[];
  avg: number;
}

export type NumberType = 'p' | 'f' | 'e' | 'r'; 