import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis } from "../../shared/axios";
import { cookies } from "../../shared/cookie";

export const __signUp = createAsyncThunk("signUp", async (newUser, thunk) => {
  try {
    await apis.post("/api/signup", newUser);
    alert(`${newUser.nickname} 님 회원가입에 성공하였습니다.`);
    return thunk.fulfillWithValue(newUser);
  } catch (e) {
    const errorMsg = e.response.data.msg;
    console.log(errorMsg);
    alert(`${errorMsg}`);
    return thunk.rejectWithValue(e);
  }
});

export const __login = createAsyncThunk("logIn", async (thisUser, thunk) => {
  try {
    const response = await apis.post("api/login", thisUser);
    cookies.set("token", response.headers.authorization, { path: "/" });

    return thunk.fulfillWithValue(thisUser);
  } catch (e) {
    console.log(e);
    const errorMsg = e.response.data.msg;
    console.log(errorMsg);
    alert(`${errorMsg}`);
    return thunk.rejectWithValue(e);
  }
});

const initialState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      cookies.remove("token");
    },
  },
});

export const isLoginActions = authSlice.actions;
export default authSlice.reducer;

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setLoginState: (state, action) => {
//       state.isLogin = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(__login.fulfilled, (state, action) => {
//       const token = cookies.get("token");
//       if (token !== undefined) {
//         state.isLogin = true;
//       }
//     })
//   }
// });

