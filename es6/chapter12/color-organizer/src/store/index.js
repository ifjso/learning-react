import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers'

const clientLogger = store => next => action => {
    if (action.type) {
        console.groupCollapsed('dispatching', action.type)
        console.log('prev state', store.getState())
        console.log('action', action)
        const result = next(action)
        console.log('next state', store.getState())
        console.groupEnd()
        return result
    }
 
    return next(action)
}

const serverLogger = store => next => action => {
    console.log('\n dispatching server action\n')
    console.log(action)
    console.log('\n')
    return next(action)
}

const middleware = server => [
    (server) ? serverLogger : clientLogger,
    thunk
]

const storeFactory = (server = false, initialData = {}) =>
    applyMiddleware(...middleware(server))(createStore)(
        combineReducers({colors}),
        initialData
    )

export default storeFactory
