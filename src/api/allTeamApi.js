import api from "./axiosConfig";

export const getAllTeam = async () => {
    const { data } = await api.get("/TeamList");

    return data;
};
