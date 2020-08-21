import React, { Component } from 'react'
import Header from './components/header'
import Intro from './components/intro'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}
export default App;
