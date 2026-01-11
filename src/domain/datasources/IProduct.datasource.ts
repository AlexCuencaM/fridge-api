import { Products } from "../entities/products";
export interface IProductDatasource {
    getAllProducts(): Promise<Products[]>;
    postProduct(product: Products): Promise<Products>;
}