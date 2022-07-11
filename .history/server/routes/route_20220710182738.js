import express from 'express';
import {addUser} from '../controller/user-controller.js';
import{}
const router = express.Router();

router.post('/adduser',addUser)
router.get('/alluser', allUser);
export default router;