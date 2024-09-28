import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bug } from '../../types';

interface BugsState {
  bugs: Bug[];
  loading: boolean;
  error: string | null;
}

const initialState: BugsState = {
  bugs: [],
  loading: false,
  error: null,
};

const bugsSlice = createSlice({
  name: 'bugs',
  initialState,
  reducers: {
    setBugs: (state, action: PayloadAction<Bug[]>) => {
      state.bugs = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setBugs, setLoading, setError } = bugsSlice.actions;
export default bugsSlice.reducer;
