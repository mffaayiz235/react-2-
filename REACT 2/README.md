# Average Calculator Microservice

This is a React-based microservice that calculates averages of different types of numbers fetched from a third-party API.

## Features

- Fetches different types of numbers (prime, fibonacci, even, random)
- Maintains a sliding window of unique numbers
- Calculates averages of stored numbers
- Handles timeouts and errors gracefully
- Provides detailed state information in responses

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The server will start on port 3000 by default.

## Usage

Access the following endpoints to get numbers and their averages:

- Prime numbers: `http://localhost:3000/numbers/p`
- Fibonacci numbers: `http://localhost:3000/numbers/f`
- Even numbers: `http://localhost:3000/numbers/e`
- Random numbers: `http://localhost:3000/numbers/r`

## Response Format

```json
{
  "windowPrevState": [], // Previous state of the window
  "windowCurrState": [], // Current state of the window
  "numbers": [], // Numbers received from the third-party server
  "avg": 0.00 // Average of numbers in the current window
}
```

## Configuration

- Window size is set to 10 numbers
- API timeout is set to 500ms
- Duplicate numbers are automatically filtered out 