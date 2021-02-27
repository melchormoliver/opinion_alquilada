import { combineReducers } from 'redux';
import opinionReducer from './opinion/reducer/reducer';

export const rootReducer = combineReducers({
  opinion: opinionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
