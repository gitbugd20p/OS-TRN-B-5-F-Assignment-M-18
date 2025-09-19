import api from './axiosConfig'

export const getWorkList = async () => {
	const {data} = await api.get("/WorkList");
	console.log(data);
	
	return data;
}