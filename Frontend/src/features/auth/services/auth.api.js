import axios from "axios"

const API = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    withCredentials: true
});

const refreshClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    withCredentials: true,
});

let refreshPromise = null;

const shouldBypassRefresh = (url = "") => {
    return ["/auth/login", "/auth/signup", "/auth/refresh", "/auth/logout"].some((path) => url.includes(path));
};

const queueRefresh = async () => {
    if (!refreshPromise) {
        refreshPromise = refreshClient.post("/auth/refresh").finally(() => {
            refreshPromise = null;
        });
    }
    return refreshPromise;
};

API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error?.config;
        const statusCode = error?.response?.status;

        if (!originalRequest || statusCode !== 401 || originalRequest._retry || shouldBypassRefresh(originalRequest.url)) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            await queueRefresh();
            return API(originalRequest);
        } catch (refreshError) {
            return Promise.reject(refreshError);
        }
    }
);

export const registerUser = (data) => API.post("/auth/signup", data)
export const loginUser = (data) => API.post("/auth/login", data)
export const logoutUser = () => API.post("/auth/logout")
export const getCurrentUser = () => API.get("/auth/me")
export const refreshSession = () => refreshClient.post("/auth/refresh")