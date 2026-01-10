import { Router } from "express";
import { TypeProductsController } from "./controller";
import { TypeProductPrismaDatasource } from "../../../infrastructure/datasources/TypeProduct.prisma-datasource";
import { TypeProductRepository } from "../../../infrastructure/repositories/TypeProduct.repository";

export class TypeProductRoutes{
    static get routes(): Router{
        const router = Router();
        const datasource = new  TypeProductPrismaDatasource();
        const repository = new TypeProductRepository(datasource);
        const typeProductController = new TypeProductsController(repository);
        router.get('/', typeProductController.getAsync);
        router.post('/', typeProductController.postAsync);
        return router;
    }
}