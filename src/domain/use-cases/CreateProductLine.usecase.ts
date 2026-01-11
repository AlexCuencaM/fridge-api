import { ProductLine } from "../entities/productLine";
import { IProductLineRepository } from "../repositories/IProductLine.repository";

export interface ICreateProductLineUsecase{
    execute(newProductLine: ProductLine): Promise<ProductLine>;
}
export class CreateProductLineUsecase implements ICreateProductLineUsecase{
    constructor(
        private readonly repository: IProductLineRepository
    ){}
    async execute(newProductLine: ProductLine): Promise<ProductLine> {
        return await this.repository.postProductLine(newProductLine);
    }
}