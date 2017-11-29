import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import Router from './views/Router'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Router />, document.getElementById('root'))
registerServiceWorker()
