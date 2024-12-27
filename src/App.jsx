import './App.css';
import React from "react";
import Lottery from './Lottery';

function App() {
  // Function to check if all elements in a ticket are the same
  const winCondition = (ticket) => ticket.every((num) => num === ticket[0]);

  return (
    <div>
      <Lottery n={3} winCondition={winCondition} />
    </div>
  );
}

export default App;
