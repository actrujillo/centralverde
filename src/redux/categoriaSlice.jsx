import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "",
};

const categoriaSlice = createSlice({
  name: "categoria",
  initialState,
  reducers: {
    categorySelection: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { categorySelection } = categoriaSlice.actions;

export default categoriaSlice.reducer;
