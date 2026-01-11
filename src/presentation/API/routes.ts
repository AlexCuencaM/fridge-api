import { Router } from "express";
import { ProductRoutes } from "./products/routes";
import { TypeProductRoutes } from "./type-products/routes";
import { ProductLineRoutes } from "./product-line/routes";

export class AppRoutes{
    static get routes(): Router{
        const router = Router();
        router.use('/api/products', ProductRoutes.routes);
        router.use('/api/product-lines', ProductLineRoutes.routes);
        router.use('/api/type-products', TypeProductRoutes.routes);
        return router;
    }
}