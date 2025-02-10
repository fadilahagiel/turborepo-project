import { createStore, applyMiddleware, combineReducers } from "redux";
import { ThunkMiddleware, thunk } from 'redux-thunk';
import { AnyAction } from 'redux';
import usersReducer from "./reducers";

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>)
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
