import React, { Component } from 'react';
import logo from './art/lambda_school_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lambda School cs1</h1>
        </header>
        <img src="https://mlpforums.com/uploads/post_images/img-3460377-1-my_little_pony_friendship_is_magic_image_my_little_by_victoriawolf16-d83snor.gif" alt="So much studying" />
      </div>
    );
  }
}

export default App;
