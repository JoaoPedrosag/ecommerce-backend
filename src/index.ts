import express from 'express';
import mongoose from 'mongoose';

import * as dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
console.log(dbPassword);

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@javaweb.mrxj1c9.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log('Connected to database!');
    const app = express();
    app.listen(3001, () => {
        console.log('Server is running on port 3001');

    });
}).catch((err)=> {
    console.log(err);
});



