import React from 'react'
import { render } from 'react-dom'
import storeFactory from './store'
import App from './components/App'

const store = storeFactory()

window.React = React
window.store = store

render(
    <App store={store} />,
    document.getElementById('react-container')
)
