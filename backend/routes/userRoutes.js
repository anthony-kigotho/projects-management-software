const {Router} = require('express');
const {createUser , getUsers , deleteUser , updateUser , getOneUser} = require('../controllers/userControler');
const {loginUser} = require('../controllers/authControler');

const userRouter = Router();


userRouter.get('/',getUsers)
userRouter.get('/:id',getOneUser)
userRouter.post('/register',createUser)
userRouter.put('/update/:id',updateUser)
userRouter.post('/login',loginUser)
userRouter.delete('/delete/:id',deleteUser)

module.exports = userRouter;