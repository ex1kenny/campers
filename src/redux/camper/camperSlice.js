import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./camperOps";

const initialFavoriteIds = JSON.parse(localStorage.getItem("campers")) || [];

const camperSlice = createSlice({
  name: "camper",
  initialState: {
    items: [],
    favorites: [],
    location: "",
    filters: { equipment: [], type: [] },
    loading: false,
    error: false,
  },
  reducers: {
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
    changeFilters: (state, action) => {
      state.filters = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      const updatedFavorites = state.favorites.map((fav) => fav._id);
      localStorage.setItem("campers", JSON.stringify(updatedFavorites));
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (camper) => camper._id !== action.payload
      );
      const updatedFavorites = state.favorites.map((fav) => fav._id);
      localStorage.setItem("campers", JSON.stringify(updatedFavorites));
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
        state.favorites = state.items.filter((item) =>
          initialFavoriteIds.includes(item._id)
        );
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const camperReducer = camperSlice.reducer;
export const { changeLocation, changeFilters, addFavorite, deleteFavorite } =
  camperSlice.actions;
