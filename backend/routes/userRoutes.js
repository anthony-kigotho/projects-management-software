const {Router} = require('express');
const {createUser , getUsers , deleteUser , updateUser , getOneUser ,getProjectAssigned} = require('../controllers/userControler');
const {getLoggedInUser} = require('../controllers/authControler');
const {loginUser} = require('../controllers/authControler');
const { verifyToken } = require('../middleware/verifyToken');

const userRouter = Router();


userRouter.get('/',getUsers)
userRouter.get('/loggedInUser',verifyToken,getLoggedInUser)
userRouter.get('/:id',getOneUser)
userRouter.post('/register',createUser)
userRouter.put('/update/:id',updateUser)
userRouter.post('/login',loginUser)
userRouter.delete('/delete/:id',deleteUser)
userRouter.get('/getProjectAssigned',getProjectAssigned)

module.exports = userRouter;