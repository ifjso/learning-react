import React from 'react'
import ReactDOM from 'react-dom'
import storeFactory from './store'
import App from './components/App'

const store = storeFactory()

window.store = store
window.React = React

const render = () =>
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('react-container')
    )

store.subscribe(render)

render()
