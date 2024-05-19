import publicAxios from "../../../components/publicAxios";

export const getBlogsByCategory = async ({ categoryId, sortBy, sortOrder }) => {
  try {
    const response = await publicAxios.get(`/get-blogs/${categoryId}`, {
      params: {
        sortBy,
        sortOrder,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
