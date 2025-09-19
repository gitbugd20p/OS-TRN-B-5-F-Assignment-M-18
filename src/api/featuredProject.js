import api from "./axiosConfig";

export const getFeaturedProject = async () => {
    const { data } = await api.get("/FeaturedProject");
    return data;
};
