import { Response, Request } from "express";
import { CreateProductUsecase } from "../../../domain/use-cases/CreateProduct.usecase";
import { GetAllProductsUsecase } from "../../../domain/use-cases/GetAllProducts.usecase";
export class ProductController {
    constructor(
        private readonly createProductUsecase: CreateProductUsecase,
        private readonly getProductsUsecase: GetAllProductsUsecase
    ) {}
    // Controller methods here
    public getAsync = async (req: Request, res: Response) => {
        const products = await this.getProductsUsecase.execute();
        res.json(products);
    }
    public postAsync = async (req: Request, res: Response) => {
        const product = await this.createProductUsecase.execute(req.body);
        res.json(product);
    }
}