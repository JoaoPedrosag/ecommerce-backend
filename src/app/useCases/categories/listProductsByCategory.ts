import { Request, Response } from 'express';
import { Product } from '../../models/Product';
export async function listProductsByCategory(req: Request, res: Response) {
    try {
        const products = await Product.find().where('Category').equals(req.params.categoryId);
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
