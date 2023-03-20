import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwt } from "../../api/jwt";

//추가
export const __addWrite = createAsyncThunk(
  "addWrite",
  async (newWrite, thunkAPI) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/posts`,
        newWrite,
        {
          headers: {
            Authorization: `${jwt}`,
          },
        }
      );
      alert("업로드 성공!");
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      const errorMag = error.response.data.msg;
      console.log(error);
      alert(`${errorMag}`);
      return;
    }
  }
);

const initialState = {
  mag: "",
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
