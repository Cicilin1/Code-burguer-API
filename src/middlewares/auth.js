import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

function authMiddlewares(request, response, next) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ Error: 'User not authenticate!' });
  }

  const token = authToken.split(' ').at(1);

  try {
    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        throw new Error();
      }

      request.UserId = decoded.id;

      return next();
    });
  } catch (err) {
    return response.status(401).json({ err: 'User not autenthicate!' });
  }
}

export default authMiddlewares;
