import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Layout from '../layout/Layout'
import Routes from '../router/Routes'

import store from '../redux'

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Routes />
        </Layout>
      </Provider>
    )
  }
}

export default App
