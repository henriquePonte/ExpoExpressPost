import express from 'express';
import dotenv from "dotenv";
import axios from "axios";
import User from '../models/UserModel.js';

const router = express.Router();
dotenv.config();

router.get('/', async (req, res) => {

});



export default router;
