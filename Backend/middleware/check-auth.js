const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
try{
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'Secret-String-for-the-example');

    next();
}
catch(err){
res.status(401).json({message: 'Auth Failed'})
}
}