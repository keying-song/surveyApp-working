import express from 'express';
import {addUser, all} from '../controller/user-controller.js';

const router = express.Router();

router.post('/adduser',addUser)
router.get('/alluser', allUser);
export default router;