import publicAxios from "../../../components/publicAxios";

export const getExtraImage = async () => {
    const response = await publicAxios.get(`/get-extra-images`);
    return response.data;
  };