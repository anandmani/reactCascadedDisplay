import React, { Component } from 'react';
// import './App.css';
import CascadedDisplay from './CascadedDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CascadedDisplay
          one={<div>1</div>}
          two={<div>2</div>}
          three={<div>3</div>}
        />
      </div>
    );
  }
}

export default App;
