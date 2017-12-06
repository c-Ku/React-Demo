import * as React from 'react'
import Layout from '../Layout/Layout'
import Routes from '../Router/Routes'
import store from '../Redux/index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'



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
