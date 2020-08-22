import React, { Component } from 'react'
import Header from './components/header'
import Intro from './components/intro'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import CV from './components/cv'


class App extends Component {
  componentDidMount () {
    const plugins = document.createElement('script')
    plugins.src = 'js/plugins.js'
    const mainScript = document.createElement('script')
    mainScript.src = 'js/main.js'
    document.body.appendChild(plugins)
    document.body.appendChild(mainScript)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
        <CV />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}
export default App;
