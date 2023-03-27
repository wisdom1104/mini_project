import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { __getBoard } from "./boradSlice";

//추가
export const __addWrite = createAsyncThunk(
  "addWrite",
  async (newWrite, thunkAPI) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/posts`,
        newWrite,
        {
          headers: {
            // Authorization: decodeURI(document.cookie).replace("token=", ""),
            // Authorization: decodeURI(document.cookie.token).replace("token=", ""),
            Authorization: decodeURI(document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1]),
          },
        }
      );

      // console.log(response.data);
      thunkAPI.dispatch(__getBoard());
      return thunkAPI.fulfillWithValue(true);
    } catch (error) {
      const errorMag = error.response.data.msg;
      // console.log(error);
      alert(`${errorMag}`);
      return thunkAPI.rejectWithValue(false);
    }
  }
);

const initialState = {
  write: [],
  isLoading: false,
  isSuccess: true,
  error: null,
};

//  Write    write

export const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {},
  extraReducers: {
    [__addWrite.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
      state.error = null;
    },
    [__addWrite.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = action.payload;
    },
    [__addWrite.rejected]: (state, action) => {
      state.isSuccess = action.payload;
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { } = writeSlice.actions;
export default writeSlice.reducer;
