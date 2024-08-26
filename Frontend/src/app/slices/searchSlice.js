import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    text: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      return {
        ...state,
        text: action.payload,
      };
    },
  },
});

export const { setSearchText } = searchSlice.actions;

export default searchSlice;
