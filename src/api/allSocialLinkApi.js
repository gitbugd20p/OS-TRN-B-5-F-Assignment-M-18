import api from "./axiosConfig";

export const getAllSocialLink = async () => {
    const { data } = await api.get("/SocialLink");

    return data;
};
