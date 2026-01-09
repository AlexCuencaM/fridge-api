import { Response, Request } from "express";
export class ProductController {
    // Controller methods here
    public getAsync = (req: Request, res: Response) => {
        res.json({ message: "Get Products" });
    }
}