// Importing the axios library for making HTTP requests
import axios from "axios";
// Importing the Item type from the local types file
import { Item } from "../types";

// Base URL for the API
const API_BASE_URL = "https://fakestoreapi.com";

// Function to fetch a list of products
export const fetchProducts = async (): Promise<Item[]> => {
  try {
    // Sending a GET request to the API to fetch products
    const response = await axios.get<Item[]>(`${API_BASE_URL}/products`);
    // Returning the data from the response
    return response.data;
  } catch (error) {
    // Throwing an error if the request fails
    throw new Error("Failed to fetch products");
  }
};

// Function to fetch details of a specific product by its ID
export const fetchProductDetails = async (id: number): Promise<Item> => {
  try {
    // Sending a GET request to the API to fetch a specific product by ID
    const response = await axios.get<Item>(`${API_BASE_URL}/products/${id}`);
    // Returning the data from the response
    return response.data;
  } catch (error) {
    // Throwing an error if the request fails
    throw new Error(`Failed to fetch details for product ${id}`);
  }
};
