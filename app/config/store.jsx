import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { router5Middleware, router5Reducer } from 'redux-router5';
import { devTools } from 'redux-devtools';

import router from 'app/config/router';

export const applicationCreateStore = compose(
  applyMiddleware(router5Middleware(router)),
  devTools()
)(createStore);

export const reducers = combineReducers({
  router: router5Reducer,
})

export function buildStore() {
  return applicationCreateStore(reducers, {});
}

export default buildStore();
