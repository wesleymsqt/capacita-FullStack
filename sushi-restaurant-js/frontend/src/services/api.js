import axios from "axios";

const API_BASE_URL = "/api";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error("API Error:", message);
    return Promise.reject(new Error(message));
  }
);

const api = {
  getCategories: async () => {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  },

  getProductsByCategory: async (category) => {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      params: { category: category },
    });
    return response.data;
  },

  createOrder: async (orderData) => {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
    return response.data;
  },
};

export default api;
