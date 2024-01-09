// api/index.ts
import axios from "axios";
import { Item } from "../types";

const API_BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Item[]> => {
  try {
    const response = await axios.get<Item[]>(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const fetchProductDetails = async (id: number): Promise<Item> => {
  try {
    const response = await axios.get<Item>(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch details for product ${id}`);
  }
};
