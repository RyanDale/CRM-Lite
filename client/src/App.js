import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous" />
          <header className="App-header">
            <NavBar></NavBar>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
