import express from 'express';
const router = express.Router();
import { DisplayHomePage} from "../controllers/index";

/* GET home page. */
router.get('/', DisplayHomePage);
/* GET home page. */
router.get('/home', DisplayHomePage);




export default router;
