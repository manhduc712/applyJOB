import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
    timeout: 3000
});

instance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("user_token");
        if (token) {
            request.headers["Authorization"] = "Bearer " + token;
        }
        return request;
    }
);

// instance.interceptors.response.use(
//     (response) => {
//         const res = response.data;
//         return res;
//     }
// );

export default instance;
