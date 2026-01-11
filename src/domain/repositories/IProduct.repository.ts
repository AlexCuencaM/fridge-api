import { Products } from "../entities/products";
export interface IProductRepository {
    getAllProducts(): Promise<Products[]>;
    postProduct(product: Products): Promise<Products>;
}