import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwt } from "../../api/jwt";

//조회
export const __getDetail = createAsyncThunk(
  "getDetail",
  async (postId, thunkAPI) => {
    // console.log(postId);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`,
        {
          headers: {
            Authorization: `${jwt}`,
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
  async (postId) => {
    // console.log(postId);

    await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${postId}`,
      {
        headers: {
          Authorization: `${jwt}`,
        },
      }
    );
  }
);

//수정
export const __editDetail = createAsyncThunk("editDetail", async (payload) => {
  // console.log(payload);
  // console.log(payload.postId);
  try {
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${payload.postId}`,
      {
        title: payload.title,
        content: payload.content,
        classNumber: payload.classNumber,
        specialty: payload.specialty,
      },
      {
        headers: {
          Authorization: `${jwt}`,
        },
      }
    );
  } catch (error) {
    const errorMag = error.response.data.msg;

    // const errorMag = error.response.data.mag;
    alert(`${errorMag}`);
    // return thunkAPI.rejectWithValue(error.response);
  }
});

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
