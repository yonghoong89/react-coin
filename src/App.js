import React, { Component } from 'react';
import './App.css';
import news from './news';
import price from './Price';

console.log(1)
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
        <article className="box__news">
          <div className="h_area"></div><h2 className="h_type">Recent News</h2><span><span></span>14:06</span>
        </article>
      </div>
    );
  }

}

export default App;
