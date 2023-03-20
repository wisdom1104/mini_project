import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const jwt =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjU1NSIsImF1dGgiOiJBRE1JTiIsImV4cCI6MTY3OTI3NzUzOCwiaWF0IjoxNjc5MjczOTM4fQ.nTdK38-hV_t1IKw03EGQnmu-u2JMqVoVyMKykjUPBj8";

//조회
export const __getDetail = createAsyncThunk(
  "getDetail",
  async (postId, thunkAPI) => {
    console.log(postId);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`,
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

//삭제
export const __deleteDetail = createAsyncThunk(
  "deleteDetail",
  async (postId, thunkAPI) => {
    // console.log(postId);
    await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
  }
);

//수정
export const __editDetail = createAsyncThunk(
  "editDetail",
  async (payload, postId) => {
    console.log(payload);
    console.log(postId);
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`,
      {
        id: payload.id,
        title: payload.title,
        content: payload.content,
        classNumber: payload.classNumber,
        specialty: payload.specialty,
      }
    );
  }
);

// Detail    detail

const initialState = {
  detail: [],
  isLoading: false,
  error: null,
};

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    // 조회
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__getDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //수정
    [__editDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__editDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__editDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
