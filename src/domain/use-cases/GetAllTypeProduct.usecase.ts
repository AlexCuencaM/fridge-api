import { TypeProductGetAdapter } from "../adapters/typeProduct.adapter";
import { GetTypeProductDto } from "../dtos/GetTypeProductDto";
import { ITypeProductRepository } from "../repositories/TypeProduct.repository";

export interface IGetAllTypeProductUsecase{
    execute(): Promise<GetTypeProductDto[]>;
}
export class GetAllTypeProductUsecase implements IGetAllTypeProductUsecase{
    constructor(
        private readonly repository: ITypeProductRepository
    ){}
    async execute(): Promise<GetTypeProductDto[]> {
        const domains = await this.repository.getAllTypeProducts();
        return domains.map(domain => TypeProductGetAdapter.toDto(domain));
    }
}