import api from "./axiosConfig";

export const getAllServices = async () => {
    const { data } = await api.get("/AllService");

    return data;
};
