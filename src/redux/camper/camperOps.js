import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://66b6303cb5ae2d11eb663065.mockapi.io/",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/e");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
