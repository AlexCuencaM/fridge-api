import { Response, Request } from "express";
import { ITypeProductRepository } from "../../../domain/repositories/ITypeProduct.repository";
import { TypeProductFormAdapter } from "../../../domain/adapters/typeProduct.adapter";
export class TypeProductsController {
    constructor(
        private readonly repository: ITypeProductRepository
    ) {}
    // Controller methods here
    public getAsync = async (req: Request, res: Response) => {
        const typeProducts = await this.repository.getAllTypeProducts();
        res.json(typeProducts);
    }
    public postAsync = async (req: Request, res: Response) => {
        const formDto = TypeProductFormAdapter.fromRequest(req.body);
        const typeProduct = await this.repository.postTypeProduct(formDto as any);
        res.json(typeProduct);
    }
}