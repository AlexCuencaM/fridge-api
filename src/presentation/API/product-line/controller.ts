import { ICreateProductLineUsecase } from "../../../domain/use-cases/CreateProductLine.usecase";
import { IGetNextProductsToExpireUsecase } from "../../../domain/use-cases/GetNextProductsToExpire.usecase";
export class ProductLineController{
    constructor(
        private readonly getProductsToExpireUsecase: IGetNextProductsToExpireUsecase,
        private readonly createProductLineUsecase: ICreateProductLineUsecase
    ){}
    async getNextProductsToExpireAsync(req: any, res: any){
        console.log("Handling getNextProductsToExpireAsync request");
        console.log(this.getProductsToExpireUsecase);
        const products =  await this.getProductsToExpireUsecase.execute();
        res.json(products);
    }
    async postAsync(req: any, res: any){
        // Implementation for posting a product line if needed
        const newProductLine = this.createProductLineUsecase.execute(req.body);
        res.json(newProductLine);
    }
}