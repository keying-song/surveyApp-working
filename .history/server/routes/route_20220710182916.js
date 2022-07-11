import express from 'express';
import {addUser, allUser} from '../controller/user-controller.js';

const router = express.Router();

router.post('/adduser',addUser)
router.get('/alluser', getUser);
export default router;