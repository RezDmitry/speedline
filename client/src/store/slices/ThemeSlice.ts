import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
  theme: string,
}

export const initialState: IThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
