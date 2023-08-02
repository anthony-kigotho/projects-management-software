const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const DB = require('../database/dbHelpers');
const {StatusCodes} = require('http-status-codes');

const loginUser = async (req, res, next) => {
    
        const {email, password} = req.body;
    
        try {
            const user = await DB.executeProcedure('getUserByEmail',email);
    
            if(!user) {
                res.status(StatusCodes.NOT_FOUND).json({message: 'User not found'});
                throw new Error('User not found');
            }
    
            const isMatch = await bcrypt.compare(password, user.password);
    
            if(!isMatch) {
                res.status(StatusCodes.UNAUTHORIZED).json({message: 'Invalid credentials'});
                throw new Error('Invalid credentials');
            }

            const {password , ...payload} = user;
    
            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1h'});
            res.status(StatusCodes.OK).json({message:'login successful' ,token , payload});
    
    
        } catch (error) {
            console.log(error)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong in the server'})
        }
};



module.exports = {
    loginUser,
}