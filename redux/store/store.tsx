import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../slices/apiSlice';
import counterSlice from '../slices/counterSlice';
import usersSlice from '../slices/usersSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)

})
export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch