import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from 'cors';
import Sequelize from 'sequelize';

import UserController from './controllers/UserController.js';
import authController from "./controllers/authController.js";
import User from "./models/UserModel.js";



dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});


const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected!');
        await User.sync();



    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
};



const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/users', UserController);
app.use('/auth', authController);


const startServer = async () => {
    await connectDatabase();

    const {PORT} = process.env;
    app.listen(PORT, () => {
        console.log(`Server is listening at port: ${PORT}`);
    });
};

startServer();
