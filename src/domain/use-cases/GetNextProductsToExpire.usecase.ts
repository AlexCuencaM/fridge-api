import { ProductLine } from "../entities/productLine";
import { IProductLineRepository } from "../repositories/IProductLine.repository";

export interface IGetNextProductsToExpireUsecase{
    execute(): Promise<ProductLine[]>;
}
export class GetNextProductsToExpireUsecase implements IGetNextProductsToExpireUsecase{
    constructor(
        private readonly repository: IProductLineRepository
    ){}
    async execute(): Promise<ProductLine[]> {
        console.log("Executing GetNextProductsToExpireUsecase");
        return await this.repository.getNextProductsToExpire();
    }
}