import publicAxios from "../../publicAxios";

export const getBlogsExceptCurrent = async ({ categoryId, id, language }) => {
  try {
    const response = await publicAxios.get(
      `/get-blog-except-current/${categoryId}/${id}`,
      {
        headers: {
          "Accept-Language": language,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
