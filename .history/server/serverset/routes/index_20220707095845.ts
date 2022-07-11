import express from 'express';
const router = express.Router();
import { DisplayHomePage} from "../controller/index";

/* GET home page. */
router.get('/', DisplayHomePage);
/* GET home page. */
router.get('/home', DisplayHomePage);




export default router;
