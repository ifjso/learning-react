import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import storeFactory from './store'
import App from './components/App'

const store = storeFactory(false, window.__INITIAL_STATE__)

window.React = React
window.store = store

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('react-container')
)
