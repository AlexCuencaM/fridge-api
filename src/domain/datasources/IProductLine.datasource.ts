import { ProductLine } from "../entities/productLine";
export interface IProductLineDatasource {
    getNextProductsToExpire(): Promise<ProductLine[]>;
    postProductLine(productLine: ProductLine): Promise<ProductLine>;
}