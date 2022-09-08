import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import faker from "faker";
const shortid = require("shortid");

axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const getUserDataServer = createAsyncThunk(
  "get/getUserDataServer",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`/user`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const uploadInfluencerImages = createAsyncThunk(
  "post/uploadInfluencerImages",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.post("influencer/image", data); // POST /post/images
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const influencerRegister = createAsyncThunk(
  "post/influencerRegister",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("influencer/register", data); // POST /post/images
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);