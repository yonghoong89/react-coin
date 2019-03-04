import React, { Component, Fragment } from 'react';
import Header from './header';
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

export default App;
