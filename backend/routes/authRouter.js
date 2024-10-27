import express from 'express'
const router=express.Router();

import { login,Register } from '../controllers/authController';


//auth routes

router.post('/register',Register)
router.post('/login',login)





export default router