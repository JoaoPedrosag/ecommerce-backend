import {Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();


router.get('/categories', listCategories);

router.post('/categories', (req, res) => {
    res.send('Categories');
});


router.get('/products', (req, res) => {
    res.send('Products');
});


router.post('/products', (req, res) => {
    res.send('Categories');
});



router.get('/categories/:categoryId/products', (req, res) => {
    res.send('ok');
});


router.get('/orders', (req, res) => {
    res.send('Ok');
});

router.post('/orders', (req, res) => {
    res.send('Ok');
});

router.patch('/orders/:orderId', (req, res) => {
    res.send('Ok');
});

router.delete('/orders/:orderId', (req, res) => {
    res.send('Ok');
});