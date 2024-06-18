import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multerConfig';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductsController from './app/controllers/ProductsController';
import authMiddlewares from './middlewares/auth';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddlewares);
routes.post('/products', upload.single('file'), ProductsController.store);
routes.get('/products', ProductsController.index);

export default routes;
