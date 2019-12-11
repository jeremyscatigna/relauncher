import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux'
import store from './store'

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
})

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
