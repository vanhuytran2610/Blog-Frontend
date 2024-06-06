import publicAxios from "../../publicAxios";

export const getExtraImage = async () => {
  try {
    const response = await publicAxios.get(`/get-extra-images`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching blogs:", error);
    throw error; // Propagate the error to the caller
  }
};
