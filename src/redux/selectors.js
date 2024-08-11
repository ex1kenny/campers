import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.camper.items;
export const selectIsLoading = (state) => state.camper.loading;
export const selectIsError = (state) => state.camper.erro;
export const selectLocation = (state) => state.camper.location;
export const selectFilters = (state) => state.camper.filters;
export const selectFavorites = (state) => state.camper.favorites;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocation],
  (campers, inputFilter) => {
    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(inputFilter.toLowerCase())
    );
  }
);
