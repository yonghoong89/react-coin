import React, { Component } from 'react';
import Price from './content_Price';
import News from './content_News';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="bx">
        <header>
          <h1>Live Cryptocurrency</h1>
          <p className="countdown">60</p>
          <button type="button" className="btn_reload"><span className="blind">Refresh</span></button>
        </header>
        
        <Price />
        <News />
      </div>
    );
  }

}

export default App;
