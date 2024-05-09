import publicAxios from "../../../components/publicAxios";

export const getBlogsExceptCurrent = async ({ categoryId, id }) => {
  const response = await publicAxios.get(`/get-blog-except-current/${categoryId}/${id}`);
  console.log(response);
  return response.data;
};