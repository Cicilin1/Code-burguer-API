import { Router } from 'express';
import { v4 } from 'uuid';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    id: v4(),
    name: 'Cicilini',
    email: 'cicilin@gmail.com',
    password_hash: 'hashaha',
  });

  return res.status(201).json(user);
});

export default routes;
