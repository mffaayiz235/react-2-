import axios from 'axios';
import { NumberResponse, NumberType } from '../types';

const BASE_URL = 'http://20.244.56.144/evaluation-service';

const endpoints = {
  p: 'primes',
  f: 'fibo',
  e: 'even',
  r: 'rand'
};

export const fetchNumbers = async (type: NumberType): Promise<number[]> => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 500);

    const response = await axios.get<NumberResponse>(`${BASE_URL}/${endpoints[type]}`, {
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    return response.data.numbers;
  } catch (error) {
    console.error('Error fetching numbers:', error);
    return [];
  }
}; 