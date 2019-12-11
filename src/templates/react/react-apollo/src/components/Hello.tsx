import React from 'react'
import ExchangeRateList from './ExchangeRateList'
import { Link } from 'react-router-dom'

import '../styles/hello.scss'

export default function Hello() {
  return (
    <div>
      <h1>Hello !</h1>
      <Link to="/about">Go to about page</Link>
      <ExchangeRateList />
    </div>
  )
}
