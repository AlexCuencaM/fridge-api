import { Products } from "../entities/products";
import { IProductRepository } from "../repositories/IProduct.repository";

export interface IGetAllProductsUsecase {
    execute(): Promise<Products[]>;
}
export class GetAllProductsUsecase implements IGetAllProductsUsecase{
    constructor(
        private readonly repository: IProductRepository
    ){}
    async execute(): Promise<Products[]> {
        const domains = await this.repository.getAllProducts();
        return domains;
    }
}