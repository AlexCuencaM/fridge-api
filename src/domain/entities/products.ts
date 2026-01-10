import type { ProductLine } from './productLine';
import type { TypeProduct } from './typeProduct';
export class Products {
	id: number = 0;
	name: string = '';
	productLine: ProductLine[] = [];
	typeProductId?: number;
	typeProduct?: TypeProduct;
}
