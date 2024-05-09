import publicAxios from "../../../components/publicAxios";

export const getBlogs = async ({ orderBy, orderSort }) => {
  try {
    const response = await publicAxios.get("/auth/get-blogs", {
      params: {
        orderBy: orderBy,
        orderSort: orderSort,
      },
    });
    console.log(orderBy);
    console.log(orderSort);
    console.log(response);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
