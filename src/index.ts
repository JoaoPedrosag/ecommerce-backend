import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import path from 'node:path';
import * as dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;



mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@javaweb.mrxj1c9.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('Connected to database!');
    const app = express();

    app.listen(3001, () => {
        console.log('Server is running on port 3001');

    });
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

}).catch((err)=> {
    console.log(err);
});



