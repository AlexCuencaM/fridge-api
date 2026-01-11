import { Products } from "../entities/products";
import { IProductRepository } from "../repositories/IProduct.repository";

//Is with DTO but I dont care
export interface ICreateProductUsecase{
    execute(newProduct: Products): Promise<Products>;
}
export class CreateProductUsecase implements ICreateProductUsecase{
    constructor(
        private readonly repository: IProductRepository
    ){}
    async execute(newProduct: Products): Promise<Products> {
        return await this.repository.postProduct(newProduct);
    }
}