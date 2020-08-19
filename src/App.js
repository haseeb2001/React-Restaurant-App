import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
