import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwt } from "../../api/jwt";
// 작성  /api/posts/{postId}/comments
// 수정  /api/posts/{postId}/comments/{commentId}
// 수정 /api/posts/{postId}/comments/{commentId}

//추가
export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    // console.log("1", postId);
    // console.log("2", content);
    console.log(payload);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/posts/${payload.postId}/comments`,
        payload,
        {
          headers: {
            Authorization: `${jwt}`,
          },
        }
        // `${process.env.REACT_APP_SERVER_KEY}/Comment`,
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      const errorMag = error.response.data.msg;

      // const errorMag = error.response.data.mag;
      alert(`${errorMag}`);
      // return thunkAPI.rejectWithValue(error.response);
    }
  }
);
//삭제
export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload) => {
    // console.log(payload);
    await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${payload.postId}/comments/${payload.commentId}`,
      {
        headers: {
          Authorization: `${jwt}`,
        },
      }
    );
  }
);

//수정
export const __editComment = createAsyncThunk(
  "editComment",
  async (payload) => {
    // console.log(payload);
    await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/api/posts/${payload.postId}/comments/${payload.commentId}`,
      {
        content: payload.content,
      },
      {
        headers: {
          Authorization: `${jwt}`,
        },
      }
    );
  }
);

const initialState = {
  comment: [],
  isLoading: false,
  error: null,
};

//  Comment    comment

export const commentSlice = createSlice({
  name: "Comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Comment = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
