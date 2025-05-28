import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NumberCalculator from './components/NumberCalculator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Average Calculator Service</h1>
        </header>
        <main>
          <Routes>
            <Route path="/numbers/:numberType" element={<NumberCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 