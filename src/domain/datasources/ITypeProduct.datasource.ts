import { TypeProduct } from '../entities/typeProduct';
export interface ITypeProductDatasource {
    getAllTypeProducts(): Promise<TypeProduct[]>;
    postTypeProduct(typeProduct: TypeProduct): Promise<TypeProduct>;
}