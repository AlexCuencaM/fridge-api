import { Router } from "express";
import { ProductController } from "./controller";
import { ProductPrismaDatasource } from "../../../infrastructure/datasources/Product.prisma-datasource";
import { ProductRepository } from "../../../infrastructure/repositories/Product.repository";
import { GetAllProductsUsecase } from "../../../domain/use-cases/GetAllProducts.usecase";
import { CreateProductUsecase } from "../../../domain/use-cases/CreateProduct.usecase";

export class ProductRoutes{
    static get routes(): Router{
        const router = Router();
        const datasource = new ProductPrismaDatasource();
        const repository = new ProductRepository(datasource);
        const getAllCase = new GetAllProductsUsecase(repository);
        const createCase = new CreateProductUsecase(repository);
        const productController = new ProductController(
            createCase,
            getAllCase
        );
        router.get('/', productController.getAsync);
        router.post('/', productController.postAsync);
        return router;
    }
}