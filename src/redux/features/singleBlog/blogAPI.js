import publicAxios from "../../../components/publicAxios";

export const getBlog = async ({ categoryId, id }) => {
  try {
    const response = await publicAxios.get(`/get-blog/${categoryId}/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
