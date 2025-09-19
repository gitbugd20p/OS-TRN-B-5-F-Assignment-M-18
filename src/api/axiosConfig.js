import axios from "axios";

const api = axios.create({
    baseURL: "https://agency.teamrabbil.com/api/", // change to your backend base URL
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
