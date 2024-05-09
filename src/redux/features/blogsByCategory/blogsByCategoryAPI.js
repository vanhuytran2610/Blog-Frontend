import publicAxios from "../../../components/publicAxios";

export const getBlogsByCategory = async (categoryId) => {
    const response = await publicAxios.get(`/get-blogs/${categoryId}`);
    return response.data;
  };