import React, { Component, Fragment } from 'react';
import Price from './content_Price';
import News from './content_News';
import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <div className="bx">
          <Price />
          <News />
        </div>
      </Fragment>
    );
  }

}

function Header(){
  return(
    <header>
        <h1>Live Cryptocurrency</h1>
        <p className="countdown">60</p>
        <button type="button" className="btn_reload"><span className="blind">Refresh</span></button>
      </header>
  )
}
export default App;
