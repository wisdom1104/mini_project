import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const jwt =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjU1NSIsImF1dGgiOiJBRE1JTiIsImV4cCI6MTY3OTI3NzUzOCwiaWF0IjoxNjc5MjczOTM4fQ.nTdK38-hV_t1IKw03EGQnmu-u2JMqVoVyMKykjUPBj8";
//조회
export const __getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/posts`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
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
