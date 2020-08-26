import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 1. createElement is another way to create elements in React
  // ReactDOM.render(
  //   React.createElement("h1", {style: {color: "red"}}, "Hello"),
  //   document.getElementById('root')
  // ); 

// 2.  Babel and React work together to make code more readable

// ReactDOM.render(
//   <ul>
//     <li>Donuts</li>
//     <li>Pies</li>
//   </ul>, 
//   document.getElementById("root")
// )

//  3 Variables and React elements 

// const city = {
//   name: "Nashville",
//   country: "USA"
// } 

// ReactDOM.render(
//   <>
//   <h1>{city.name}</h1>
// <h2>{city.country}</h2> </>, 
// document.getElementById("root")
// ); 

//  4 React Components : Collections of React elements that we can use to build

function Hello() {
  return (
    <div>
      <h1>Hi!</h1>
      <p>Welcome to React!</p>
    </div>
  )
} 

ReactDOM.render(
  <Hello />, 
  document.getElementById("root")
)
