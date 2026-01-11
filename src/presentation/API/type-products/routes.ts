import { Router } from "express";
import { TypeProductsController } from "./controller";
import { TypeProductPrismaDatasource } from "../../../infrastructure/datasources/TypeProduct.prisma-datasource";
import { TypeProductRepository } from "../../../infrastructure/repositories/TypeProduct.repository";
import { GetAllTypeProductUsecase } from "../../../domain/use-cases/GetAllTypeProduct.usecase";
import { CreateTypeProductUsecase } from "../../../domain/use-cases/CreateTypeProduct.usecase";

export class TypeProductRoutes{
    static get routes(): Router{
        const router = Router();
        const datasource = new  TypeProductPrismaDatasource();
        const repository = new TypeProductRepository(datasource);
        const getUsecase = new GetAllTypeProductUsecase(repository);
        const postUsecase = new CreateTypeProductUsecase(repository);
        const typeProductController = new TypeProductsController(postUsecase, getUsecase);

        router.get('/', typeProductController.getAsync);
        router.post('/', typeProductController.postAsync);
        return router;
    }
}