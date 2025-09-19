import api from "./axiosConfig";

export const getStatList = async () => {
    const { data } = await api.get("/StatList");

    return data;
};
