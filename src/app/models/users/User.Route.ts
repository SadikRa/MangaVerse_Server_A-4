import express from 'express';
import { UserControllers } from './User.Controllers';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);

export const UserRouters = router;
