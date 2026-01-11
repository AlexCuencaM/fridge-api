import { Response, Request } from "express";
import { ICreateTypeProductUsecase } from "../../../domain/use-cases/CreateTypeProduct.usecase";
import { IGetAllTypeProductUsecase } from '../../../domain/use-cases/GetAllTypeProduct.usecase';
export class TypeProductsController {
    constructor(
        private readonly createTypeProductUsecase: ICreateTypeProductUsecase,
        private readonly getUsecase: IGetAllTypeProductUsecase
    ) {}
    // Controller methods here
    public getAsync = async (req: Request, res: Response) => {
        const typeProducts = await this.getUsecase.execute();
        res.json(typeProducts);
    }
    public postAsync = async (req: Request, res: Response) => {
        const typeProduct = await this.createTypeProductUsecase.execute(req.body);
        res.json(typeProduct);
    }
}