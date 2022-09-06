import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { backendUrl } from "../config/config";
// import userSlice from "../reducers/user";

// axios.defaults.baseURL = backendUrl;
axios.defaults.withCredentials = true; // front, backend 간 쿠키공유
export const loadPosts = createAsyncThunk(
  "post/loadPosts",
  async (data, thunkAPI) => {
    const response = await axios.get(`community/posts/${100}`);
    return response.data;
  },
);

export const addPostServer = createAsyncThunk(
  "post/addPostServer",
  async (data, thunkAPI) => {
    try {
      const response1 = await axios.post("community/post", data);
      // thunkAPI.dispatch(userSlice.actions.addPostToMe(response.data.id));
      const response2 = await axios.get(`community/posts/${100}`);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const addCommentServer = createAsyncThunk(
  "post/addCommentServer",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `/community/${data.id}/comment`,
        data.res,
      );
      const response2 = await axios.get(`community/posts/${100}`);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const addReplyServer = createAsyncThunk(
  "post/addReplyServer",
  async (data, thunkAPI) => {
    try {
      await axios.post(
        `/community/${data.refId}/${data.postId}/refcomment`,
        data.res,
      );
      const response = await axios.get(`community/posts/${100}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const uploadImages = createAsyncThunk(
  "post/uploadImages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("community/images", data); // POST /post/images
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const uploadEditImages = createAsyncThunk(
  "post/uploadEditImages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("community/images", data); // POST /post/images
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const editPostServer = createAsyncThunk(
  "patch/editPostServer",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      await axios.patch(`community/post/${data.postId}`, data.formData);
      // thunkAPI.dispatch(userSlice.actions.addPostToMe(response.data.id));
      const response2 = await axios.get(`/community/post/${data.postId}`);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deletePostServer = createAsyncThunk(
  "delete/deletePostServer",
  async (data, thunkAPI) => {
    try {
      await axios.delete(`/community/${data.id}`);
      const response2 = await axios.get(`community/posts/${100}`);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const postLikeServer = createAsyncThunk(
  "patch/postLikeServer",
  async (data, thunkAPI) => {
    try {
      await axios.patch(`/community/${data.postId}/like`);
      const response2 = await axios.get(`/community/post/${data.postId}`);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const postDeleteLikeServer = createAsyncThunk(
  "delete/postDeleteLikeServer",
  async (data, thunkAPI) => {
    try {
      await axios.delete(`/community/${data.postId}/like`);
      const response2 = await axios.get(`/community/post/${data.postId}`);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteCommentServer = createAsyncThunk(
  "delete/deleteCommentServer",
  async (data, thunkAPI) => {
    try {
      await axios.delete(`/community/comment/${data.commentId}`);
      const response2 = await axios.get(`/community/post/${data.postId}`);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteReplyServer = createAsyncThunk(
  "delete/deleteReplyServer",
  async (data, thunkAPI) => {
    try {
      await axios.delete(`/community/refcomment/${data.refCommentId}`);
      const response2 = await axios.get(`/community/post/${data.postId}`);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
