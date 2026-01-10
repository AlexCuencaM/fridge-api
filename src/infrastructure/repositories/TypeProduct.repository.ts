import { ITypeProductDatasource } from "../../domain/datasources/ITypeProduct.datasource";
import { TypeProduct } from "../../domain/entities/typeProduct";
import { ITypeProductRepository } from "../../domain/repositories/ITypeProduct.repository";

export class TypeProductRepository implements ITypeProductRepository {
    constructor(
        // You can inject your datasource here
        private readonly datasource: ITypeProductDatasource
    ) {}
    async getAllTypeProducts(): Promise<TypeProduct[]> {
        // Implementation for fetching all TypeProducts from the data source
        return this.datasource.getAllTypeProducts();
    }

    async postTypeProduct(typeProduct: TypeProduct): Promise<TypeProduct> {
        // Implementation for posting a new TypeProduct to the data source
        return this.datasource.postTypeProduct(typeProduct);
    }
}