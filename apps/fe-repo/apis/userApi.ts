import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUsers = async () => {
  try {
    const response = await axios({
      url: `${BASE_URL}/users/fetch-user-data`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

export const fetchUser = async (userId: string) => {
  try {
    const response = await axios({
      url: `${BASE_URL}/users/fetch-user-data/${userId}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch user");
  }
}

export const updateUser = async (userData: any) => {
  try {
    const response = await axios({
      url: `${BASE_URL}/users/update-user-data`,
      method: "PUT",
      data: userData,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update user");
  }
};
