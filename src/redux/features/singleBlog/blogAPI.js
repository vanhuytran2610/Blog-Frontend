import publicAxios from "../../../components/publicAxios";

export const getBlog = async ({ categoryId, id }) => {
  const response = await publicAxios.get(`/get-blog/${categoryId}/${id}`);
  console.log(response);
  return response.data;
};
