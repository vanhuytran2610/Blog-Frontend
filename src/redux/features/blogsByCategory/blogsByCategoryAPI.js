import publicAxios from "../../publicAxios";

export const getBlogsByCategory = async ({
  categoryId,
  sortBy,
  sortOrder,
  language,
}) => {
  try {
    const response = await publicAxios.get(`/get-blogs/${categoryId}`, {
      headers: {
        "Accept-Language": language,
      },
      params: {
        sortBy,
        sortOrder,
        // perPage,
        // page
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
