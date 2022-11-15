import { Request, Response } from 'express';
import { Order } from '../../models/Order';
export async function cancelOrder(req: Request, res: Response) {
    try{
        const { orderId } = req.params;
        const order = await Order.findByIdAndDelete(orderId);

        res.status(204).json('Order is canceled');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
