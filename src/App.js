import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';
import Main from './components/MainComponent';

const store = ConfigureStore();

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
