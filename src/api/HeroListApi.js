import api from "./axiosConfig";

export const HeroListApi = async () => {
    const { data } = await api.get("/HeroList");

    return data;
};
