import { Router } from "express";
import { ProductController } from "./controller";

export class ProductRoutes{
    static get routes(): Router{
        const router = Router();
        // const datasource = new ReminderCalendarDatasourceFirestore();
        // const repository = new ReminderCalendarRepositoryImpl(datasource);
        const productController = new ProductController();
        router.get('/', productController.getAsync);
        return router;
    }
}