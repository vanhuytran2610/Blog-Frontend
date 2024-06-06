import publicAxios from "../../publicAxios";

export const getBlogs = async ({ language }) => {
  try {
    const response = await publicAxios.get("/auth/get-blogs", {
      headers: {
        "Accept-Language": language,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
