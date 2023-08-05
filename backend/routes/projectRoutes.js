const {Router} = require('express');
const {createProject , getProjects , updateProject , getProject , deleteProject , completeProject} = require('../controllers/projectControler')

const projectRouter = Router();


projectRouter.post('/create',createProject)
projectRouter.get('/',getProjects)
projectRouter.get('/get/:id',getProject)
projectRouter.put('/update/:id',updateProject)
projectRouter.delete('/delete/:id',deleteProject) 
projectRouter.put('/complete/:id',completeProject)       

module.exports = projectRouter;