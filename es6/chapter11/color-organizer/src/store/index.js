import { createStore, applyMiddleware, combineReducers } from 'redux'
import { colors } from './reducers'
import stateData from '../../data/initialState'

const logger = store => next => action => {
    console.groupCollapsed('dispatching', action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    
    return result
}

const saver = store => next => action => {
    const result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialData = stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({colors}),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialData
    )

export default storeFactory
