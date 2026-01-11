import { prisma } from "../../data/prisma";
import { IProductDatasource } from "../../domain/datasources/IProduct.datasource";
import { Products } from "../../domain/entities/products";
export class ProductPrismaDatasource implements IProductDatasource {
    constructor(
    ) {}
    async getAllProducts(): Promise<Products[]> {
        const products = await prisma.products.findMany();
        const results = products.map(p => new Products(p.id, p.name));
        return results;
    }
    async postProduct(product: Products): Promise<Products> {
        if(!product.typeProductId){
            throw new Error("typeProductId is required");
        }
        const created = await prisma.products.create({
            data: {
                name: product.name,
                typeProductId: product.typeProductId,
            }
        });
        return new Products(created.id, created.name);
    }
}