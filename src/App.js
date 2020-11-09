import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to Visualizar!
        </h1>        

        <Button>
          <p>
            There wont be any photosharing here
        </p></Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
