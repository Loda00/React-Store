import React from 'react'
import { render } from 'react-dom'
import App from './app/router/index'
import './app/assets/style/index.sass'
import { Provider } from 'react-redux'
import { store } from './app/store/store'


render(<Provider store={store}>
        <App />
      </Provider>
        , document.getElementById('app'))