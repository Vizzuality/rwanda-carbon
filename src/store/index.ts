import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const staticReducers = {};

const asyncReducers = {};

const createReducer = (reducers: ReducersMapObject) =>
  combineReducers({
    ...staticReducers,
    ...reducers,
  });

const makeStore = () =>
  configureStore({
    reducer: createReducer(asyncReducers),
    devTools: process.env.NODE_ENV !== 'production',
  });

export type Store = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store['getState']>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store['dispatch'];

export default makeStore;

export const STORE_WRAPPER = createWrapper<Store>(makeStore);
