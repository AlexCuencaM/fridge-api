import type { Products } from './products';

export class TypeProduct {
	id: number;
	description: string;
	products: Products[] = [];
    constructor(id:number = 0, description:string = ''){
        this.id = id;
        this.description = description;
    }
}
