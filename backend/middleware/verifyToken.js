const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
require('dotenv').config();


const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['token'];
        if(!token){
            return res.status(StatusCodes.UNAUTHORIZED).json({message:"Unauthorized"})
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        req.info = decodedData;
        res.status(StatusCodes.OK).json({message:"Authorized"})
        
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.UNAUTHORIZED).json({message:"Unauthorized"})
        

    }
    // calling the next middleware function
    
    next()
}

module.exports = {
    verifyToken
}
