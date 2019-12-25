import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'

import rootReducer from './rootReducer'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')

  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

export { store, persistor }
