import axios from "axios";
import { cookies } from "./cookie";

// const token = cookies.get("token");

// export const apis = axios.create({
//     // baseURL: "http://localhost:4000",
//     baseURL: "http://3.39.255.221",

//     headers: {
//         authorization: `Bearer ${token}`,  // 클라가 요청을 하기로 한 게 아님!
//     },
// });


export const apis = axios.create({
    // baseURL: "http://localhost:4000",
    baseURL: "http://3.39.255.221",
});
