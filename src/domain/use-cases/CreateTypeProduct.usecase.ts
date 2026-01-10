import { ITypeProductRepository } from "../repositories/TypeProduct.repository";
import { TypeProductFormAdapter } from "../adapters/typeProduct.adapter";
import { FormTypeProductDto } from "../dtos/FormTypeProductDto";

export interface ICreateTypeProductUsecase{
    execute(newTypeProduct: FormTypeProductDto): Promise<FormTypeProductDto>;
}
export class CreateTypeProductUsecase implements ICreateTypeProductUsecase{
    constructor(
        private readonly repository: ITypeProductRepository
    ){}
    async execute(newTypeProduct: FormTypeProductDto): Promise<FormTypeProductDto> {
        const domain = TypeProductFormAdapter.toDomain(newTypeProduct);
        const created = await this.repository.postTypeProduct(domain);
        return TypeProductFormAdapter.toDto(created);
    }
}