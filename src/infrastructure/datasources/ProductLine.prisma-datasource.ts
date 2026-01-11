import { prisma } from "../../data/prisma";
import { IProductLineDatasource } from "../../domain/datasources/IProductLine.datasource";
import { ProductLine } from "../../domain/entities/productLine";
import { Products } from "../../domain/entities/products";
import { getExpiryRange } from "../libs/utils";
export class ProductLinePrismaDatasource implements IProductLineDatasource {
    constructor(
    ) {}
    async getNextProductsToExpire(): Promise<ProductLine[]> {
        const { from, to } = getExpiryRange(15);
        const productLines = await prisma.productLine.findMany({
            where: {
                ExpiryDate: {
                    gte: from,
                    lte: to,
                },
            },
            orderBy: {
                ExpiryDate: 'asc',
            },
            include: {
                product: true,
            },
        });
        return productLines.map(pl => {
            const productLineDomain = new ProductLine();
            productLineDomain.id = pl.id;
            productLineDomain.ExpiryDate = pl.ExpiryDate;
            productLineDomain.stock = pl.stock;
            productLineDomain.productId = pl.productId;

            productLineDomain.product = new Products();
            productLineDomain.product.name = pl.product.name;

            return productLineDomain;
        });
    }

    async postProductLine(productLine: ProductLine): Promise<ProductLine> {
        const created = await prisma.productLine.create({
            data: {
                price: productLine.price,
                ExpiryDate: productLine.ExpiryDate,
                stock: productLine.stock,
                productId: productLine.productId,
            },
        });

        const productLineDomain = new ProductLine();
        productLineDomain.id = created.id;
        productLineDomain.ExpiryDate = created.ExpiryDate;
        productLineDomain.stock = created.stock;
        productLineDomain.price = created.price.toNumber();
        productLineDomain.productId = created.productId;

        return productLineDomain;
    }
}