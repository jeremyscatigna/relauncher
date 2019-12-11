import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/hello.scss'

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello !</h1>
        <Link to="/about">Go to about page</Link>
      </div>
    )
  }
}

export default Hello
