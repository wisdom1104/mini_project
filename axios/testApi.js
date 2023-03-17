import axios from "axios";

const instance = axios.create({
    baseURL: process.env.TEST_URL,
})

instance.interceptors.request.use(

    //요청을 보내기 전 수행되는 함수
    function (config) {
        // console.log("interceptor request Complete")
        return config;
    },

    //오류 요청을 보내기 전 수행되는 함수
    function (error) {
        // console.log("interceoptor request error")
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(

    //응답을 내보내기 전 수행되는 함수
    function (response) {
        // console.log("interceptor response Complete")
        return response;
    },

    //오류 응답을 내보내기 전 수행되는 함수
    function (error) {
        // console.log("interceptor response error")
        return Promise.reject(error);
    }

)

export default instance;