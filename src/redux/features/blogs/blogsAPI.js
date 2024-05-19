import publicAxios from "../../../components/publicAxios";

export const getBlogs = async () => {
  try {
    const response = await publicAxios.get("/auth/get-blogs");
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
