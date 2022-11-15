import { Request, Response } from 'express';
import { Order } from '../../models/Order';
export async function listOrder(req: Request, res: Response) {
    try{
        const order = await Order.find()
            .sort({createdAt: 1})
            .populate('products.product');
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
