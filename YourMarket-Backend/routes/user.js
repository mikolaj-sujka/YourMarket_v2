import express from 'express';
import { getUserById, getCurrentUser } from './../controllers/user-controller.js'; 

const router = express.Router();

router.get('/current', getCurrentUser); 
router.get('/:id', getUserById);

export default router;