import api from "./axiosConfig";

export const getAllTestimonials = async () => {
    const { data } = await api.get("/TestimonialList");

    return data;
};
