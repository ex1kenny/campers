import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./camper/camperSlice";

export const store = configureStore({ reducer: { camper: camperReducer } });
