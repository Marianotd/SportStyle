import { Router } from 'express';
import { createUser, deleteUser, getSingleUser, getUsers, updateUser } from '../controller/usuario.controller.js';

const router = Router();

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

export default router;
