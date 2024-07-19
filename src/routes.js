import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multerConfig';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductsController from './app/controllers/ProductsController';
import CategoryController from './app/controllers/CategoryController';
import authMiddlewares from './app/middlewares/auth';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddlewares);
routes.post('/products', upload.single('file'), ProductsController.store);
routes.get('/products', ProductsController.index);
routes.put('/products/:id', upload.single('file'), ProductsController.update);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);

routes.post('/orders', OrderController.store);

export default routes;
