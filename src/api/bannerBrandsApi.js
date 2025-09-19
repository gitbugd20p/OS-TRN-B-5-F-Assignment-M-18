import api from "./axiosConfig";

export const getBannerBrands = async () => {
    const { data } = await api.get("/BrandList");

    return data;
};
