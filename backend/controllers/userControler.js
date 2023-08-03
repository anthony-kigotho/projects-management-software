const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const DB = require('../database/dbHelpers');
const {v4} = require('uuid');
const {StatusCodes} = require('http-status-codes');

const createUser = async (req, res, next) => {

        const id = v4();
        const {username , email , password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 5);

        const requestBody = {
            id,
            username,
            email,
            password: hashedPassword
        }

    try {

        await DB.executeProcedure('addUser', requestBody);
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
        const requestBody =req.body;
        requestBody['email'] = req.params.id;
        
        console.log(requestBody);
        await DB.executeProcedure('updateUser', requestBody);
        res.status(StatusCodes.OK).json({message: 'User updated successfully'});   
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        console.log(error);     
    }
}

const deleteUser = async (req, res, next) => {

    try {
        await DB.executeProcedure('deleteUser', {email:req.params.id});
        res.status(StatusCodes.OK).json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        console.log(error);   
    }
}

const getOneUser = async (req, res, next) => {
    try {

        const user = (await DB.executeProcedure('getOneUser', {email:req.params.id})).recordset;
        res.status(StatusCodes.OK).json({user});
        
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        console.log(err);
        
    }
}






module.exports = {
    createUser ,
    getUsers,
    updateUser,
    deleteUser,
    getOneUser 
}