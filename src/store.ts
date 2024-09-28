import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '../src/store/slices/tasksSlice';
import bugsReducer from '../src/store/slices/bugsSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    bugs: bugsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
