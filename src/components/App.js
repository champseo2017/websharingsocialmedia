import React, { Component } from 'react';

import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';
import Related from './Related';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content/>
        <Related/>
        <Footer/>
      

      </div>
    );
  }
}
