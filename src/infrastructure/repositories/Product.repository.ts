import { IProductDatasource } from '../../domain/datasources/IProduct.datasource';
import { Products } from '../../domain/entities/products';
import { IProductRepository } from '../../domain/repositories/IProduct.repository';
export class ProductRepository implements IProductRepository {
    constructor(
        // You can inject your datasource here
        private readonly datasource: IProductDatasource
    ) {}
    async getAllProducts(): Promise<Products[]> {
        // Implementation for fetching all Products from the data source
        return this.datasource.getAllProducts();
    }

    async postProduct(product: Products): Promise<Products> {
        // Implementation for posting a new Product to the data source
        return this.datasource.postProduct(product);
    }
}