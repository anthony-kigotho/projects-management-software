const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const DB = require('../database/dbHelpers');
const {v4} = require('uuid');
const {StatusCodes} = require('http-status-codes');

const createUser = async (req, res, next) => {

        const id = v4();
        const {password,...payload } = req.body;
        const hashedPassword = await bcrypt.hash(password, 5);



        console.log({...payload,password:hashedPassword,id})
    try {

        await DB.executeProcedure('addUser', {...payload,password:hashedPassword,id});
        res.status(StatusCodes.CREATED).json({message: 'User created successfully'});    
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        
    }

}
const getUsers = async (req, res, next) => {

    try {
        const users = (await DB.executeProcedure('getUsers')).recordset;
        res.status(StatusCodes.OK).json({users});    
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        console.log(error); 
    }
}

const updateUser = async (req, res, next) => {
    try {
        
        const {id} = req.params;
        await DB.executeProcedure('updateUser', {...req.body, id});
        res.status(StatusCodes.OK).json({message: 'User updated successfully'});   
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        console.log(error);     
    }
}

const deleteUser = async (req, res, next) => {

    try {
        await DB.executeProcedure('deleteUser', {id:req.params.id});
        res.status(StatusCodes.OK).json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        console.log(error);   
    }
}

const getOneUser = async (req, res, next) => {
    try {

        const user = (await DB.executeProcedure('getOneUser', {id:req.params.id})).recordset;
        res.status(StatusCodes.OK).json({user});
        
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        console.log(err);
        
    }
}
const getProjectAssigned = async = async(req, res, next) => {
    try {
        const projects = (await DB.executeProcedure('getProjectAssigned')).recordset;
        return res.status(StatusCodes.OK).json({projects})
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: "Server Error"}) 
    }
}






module.exports = {
    createUser ,
    getUsers,
    updateUser,
    deleteUser,
    getOneUser,
    getProjectAssigned
}