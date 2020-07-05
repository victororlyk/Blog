import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const enhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares))

export default createStore(rootReducer, enhancers)

sagaMiddleware.run(rootSaga)
