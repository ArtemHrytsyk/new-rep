import React from "react";
import './App.css';
import Vidget from './Vidget';
import Button from './Button/Button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Feedback statistics widget</h1>
        <Button text={'Click on me'} />
      </header>
      <Vidget />

    </div>
  );
}

export default App;
