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

const storeFactory = (initialData = stateData) =>
    applyMiddleware(logger)(createStore)(
        combineReducers({colors}),
        initialData
    )

export default storeFactory
