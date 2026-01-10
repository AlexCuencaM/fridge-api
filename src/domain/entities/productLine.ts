import type { Products } from './products';

export class ProductLine {
	id: number = 0;
	productId: number = 0;
	stock: number = 0;
	price: number = 0;
	ExpiryDate: Date = new Date();
	product: Products | null = null;
}
