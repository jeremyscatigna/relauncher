import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/app.scss'
import Hello from './components/Hello'
import About from './components/About'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Hello />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App
