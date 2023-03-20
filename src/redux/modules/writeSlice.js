import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const jwt =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjU1NSIsImF1dGgiOiJBRE1JTiIsImV4cCI6MTY3OTI3NzUzOCwiaWF0IjoxNjc5MjczOTM4fQ.nTdK38-hV_t1IKw03EGQnmu-u2JMqVoVyMKykjUPBj8";

//추가
export const __addWrite = createAsyncThunk("addWrite", async (newWrite) => {
  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/posts`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    },
    // `${process.env.REACT_APP_SERVER_KEY}/write`,
    newWrite
  );
});

const initialState = {
  write: [],
  isLoading: false,
  error: null,
};

//  Write    write

export const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {},
  extraReducers: {
    [__addWrite.pending]: (state) => {
      state.isLoading = true;
    },
    [__addWrite.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.write = action.payload;
    },
    [__addWrite.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = writeSlice.actions;
export default writeSlice.reducer;
