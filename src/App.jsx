import './App.css';
import React from "react";
import TodoApp from "./TodoApp";
// import {TodoList} from "./TodoList";
import Lottery from './Lottery';
// import Ticket from './Ticket';
import { sum } from './helper';
import Form from './Form';
import CommentsForm from './CommentsForm';
import Counter from './Counter';
import Joker from './Joker';


function App() {
  // return(
  //   <>
  //     <Lottery />
  //   </>
  // )
  
  
  
  
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <div>
      <Lottery n={3} winCondition={winCondition}/>
    </div>
  );
}                                                       

export default App;

