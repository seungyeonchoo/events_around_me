import { createSlice } from '@reduxjs/toolkit';

const initialViewport = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const viewportSlice = createSlice({
  name: 'viewport',
  initialState: initialViewport,
  reducers: {
    handleViewport: state => {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
    },
  },
});

export const { handleViewport } = viewportSlice.actions;
export default viewportSlice.reducer;
