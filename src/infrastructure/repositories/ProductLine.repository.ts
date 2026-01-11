import { IProductLineDatasource } from "../../domain/datasources/IProductLine.datasource";
import { ProductLine } from "../../domain/entities/productLine";
import { IProductLineRepository } from "../../domain/repositories/IProductLine.repository";

export class ProductLineRepository implements IProductLineRepository {
    constructor(
        private readonly datasource: IProductLineDatasource
    ) {}
    getNextProductsToExpire(): Promise<ProductLine[]> {
        return this.datasource.getNextProductsToExpire();
    }
    postProductLine(productLine: ProductLine): Promise<ProductLine> {
        return this.datasource.postProductLine(productLine);
    }
}
        