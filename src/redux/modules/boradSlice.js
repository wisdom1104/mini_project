import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//조회
export const __getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/posts`,
        {
          headers: {
            // Authorization: decodeURI(document.cookie).replace("token=", ""),
            // Authorization: decodeURI(document.cookie.token).replace("token=", ""),
            Authorization: decodeURI(
              document.cookie
                .split("; ")
                .find((row) => row.startsWith("token="))
                .split("=")[1]
            ),
          },
        }
      );
      // console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  board: [],
  isLoading: false,
  error: null,
};

//  board     board
//  Board     board

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: {
    [__getBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = action.payload;
    },
    [__getBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = boardSlice.actions;
export default boardSlice.reducer;
