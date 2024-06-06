import publicAxios from "../../publicAxios";

export const searchBlogs = async (searchTerm) => {
  try {
    const response = await publicAxios.get(`/blogs/search`, {
      params: { search: searchTerm },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
