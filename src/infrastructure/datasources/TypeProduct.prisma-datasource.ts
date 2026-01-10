import { prisma } from "../../data/prisma";
import { ITypeProductDatasource } from "../../domain/datasources/ITypeProduct.datasource";
import { TypeProduct } from "../../domain/entities/typeProduct";
export class TypeProductPrismaDatasource implements ITypeProductDatasource {
    constructor(
    ) {}
    async getAllTypeProducts(): Promise<TypeProduct[]> {
        const typeProducts = await prisma.typeProduct.findMany();        
        return typeProducts.map(tp => new TypeProduct(tp.id, tp.description));
    }
    async postTypeProduct(typeProduct: TypeProduct): Promise<TypeProduct> {
        const created = await prisma.typeProduct.create({
            data: {
                description: typeProduct.description
            }
        });
        return new TypeProduct(created.id, created.description);
    }
}