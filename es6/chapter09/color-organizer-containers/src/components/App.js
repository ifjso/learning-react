import { Component } from 'react'
import PropTypes from 'prop-types'
import { NewColor, Menu, Colors } from './containers'
import '../../stylesheets/APP.scss'

class App extends Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    
    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div className="app">
                <Menu />
                <NewColor />
                <Colors />
            </div>
        )
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

App.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default App
