import type { ProductLine } from './productLine';
import type { TypeProduct } from './typeProduct';
export class Products {
	id: number = 0;
	name: string = '';
	productLine: ProductLine[] = [];
	typeProductId?: number;
	typeProduct?: TypeProduct;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
