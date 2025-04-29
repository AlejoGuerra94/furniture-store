import apiClient from "../api/products";
import { IProduct } from "../types/products";

export const productsService = {
    getProducts: async () : Promise<IProduct[]> => {
        const respose = await apiClient.get("/products");
        const data : IProduct[] = respose.data;

        return data;
    }
} 