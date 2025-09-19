import api from "./axiosConfig";

export const getAllProject = async () => {
    const { data } = await api.get("/AllProject");

    return data;
};
