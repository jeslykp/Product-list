import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response;
};

export const fetchCategories = async () => {
  return  await axios.get(`${BASE_URL}/products/categories`);
};

export const fetchProductByCategory = async (selectedCategory) => {
  return await axios.get(`${BASE_URL}/products/category/${selectedCategory}`);
};
