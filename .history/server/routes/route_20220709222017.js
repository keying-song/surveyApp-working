import express from 'express';
import {addUser} from '';
const router = express.Router();

router.post('/adduser', ()=>{
    console.log(`hello`);
})
export default router;