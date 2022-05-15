import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.models.js';

export async function login(req, res) {
     const { body } = req;
     try {
         const user = await UserModel.findOne({userName: body.userName });
         if(!user) {
             throw new Error('Usuario no encontrado');
         }
         const password = jwt.verify(user.password, process.env.PRIVATE_KEY).password;
         if(body.password === password) {
             delete user.password;
             const token = jwt.sign({ user }, process.env.PRIVATE_KEY, { expiresIn: '1m' });
             res.status(200).json({ token });
         } else {
             res.status(401).send('Usuario o clave incorrecta!');
         }
     } catch (error) {
         console.log(error);
     }
}



