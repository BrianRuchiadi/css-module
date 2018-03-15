import React, { Component } from 'react';
import logo from './logo.svg';

import appStyle from './assets/styles/app.css';
import CssModules from 'react-css-modules';

class App extends Component {
  render() {
    return (
      <div>
        <header styleName="header">
          <img src={logo}  alt="logo" />
          <h>Welcome to React</h>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default CssModules(App, appStyle);
