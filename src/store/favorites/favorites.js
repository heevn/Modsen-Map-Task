import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const place = action.payload;
      const isExists = state.some((p) => p.id === place.id);

      if (isExists) {
        state = state.filter((p) => p.id === place.id);
      } else {
        state.push(place);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
