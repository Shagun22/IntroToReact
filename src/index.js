import React from 'react';
import ReactDOM from 'react-dom';

// Create a component that produces some HTML.
const App = () => {
  return <div>My First React Page !</div>
}

// Take this HTML and put it in DOM.Pass an instance of a class in ReactDOM.
ReactDOM.render(<App />,document.querySelector('.container'));
