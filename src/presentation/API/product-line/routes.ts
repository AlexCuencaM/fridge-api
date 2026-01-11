import { Router } from "express";
import { ProductLinePrismaDatasource } from "../../../infrastructure/datasources/ProductLine.prisma-datasource";
import { ProductLineController } from "./controller";
import { GetNextProductsToExpireUsecase } from "../../../domain/use-cases/GetNextProductsToExpire.usecase";
import { ProductLineRepository } from "../../../infrastructure/repositories/ProductLine.repository";
import { CreateProductLineUsecase } from "../../../domain/use-cases/CreateProductLine.usecase";
export class ProductLineRoutes{
    static get routes(): Router{
        const router = Router();
        // Setup datasource, repository, use-cases, and controller here
        // Similar to ProductRoutes but for ProductLine
        const datasource = new ProductLinePrismaDatasource();
        const repository = new ProductLineRepository(datasource);
        const getNextToExpireCase = new GetNextProductsToExpireUsecase(repository);
        const createUsecase = new CreateProductLineUsecase(repository);
        const productLineController = new ProductLineController(
            getNextToExpireCase,
            createUsecase
        );
        router.get('/next-to-expire', productLineController.getNextProductsToExpire);
        router.post('/', productLineController.postAsync);
        return router;
    }
}