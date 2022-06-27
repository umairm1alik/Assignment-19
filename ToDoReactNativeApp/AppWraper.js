
import React from 'react'



import { Provider } from 'react-redux'
import Store from './src/config/Store'

import App from './App'

export default function AppWraper() {
  return (
    <Provider store={Store}>
        <App/>
    </Provider>
  )
}