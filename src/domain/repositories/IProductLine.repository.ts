import { ProductLine } from "../entities/productLine";

export interface IProductLineRepository {
    getNextProductsToExpire(): Promise<ProductLine[]>;
    postProductLine(productLine: ProductLine): Promise<ProductLine>;
}