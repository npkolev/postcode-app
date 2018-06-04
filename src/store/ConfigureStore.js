import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/RootReducer'
import thunk from 'redux-thunk'


export default function configureStore(initialState) {

    const middleware = [
        thunk
    ]

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );

    return store;
}

