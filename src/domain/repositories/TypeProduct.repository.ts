import { TypeProduct } from "../entities/typeProduct";

export interface ITypeProductRepository {
    getAllTypeProducts(): Promise<TypeProduct[]>;
    postTypeProduct(typeProduct: TypeProduct): Promise<TypeProduct>;
}