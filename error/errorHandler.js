const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
   switch(statusCode){
    case 404:
        res.json({
            message:err.message,
            stack: err.stack
        });
        break;
    case 400:
        res.json({
            message:err.message,
            stack: err.stack
        });
        break;
    case 401:
        res.json({
            message:err.message,
            stack: err.stack
        });
        break;
    case 500:
        res.json({
            message:err.message,
            stack: err.stack
        });
        break;
    default:
        console.log("No error, All good !!");
        break;
   }
}

const ValidationError =  ( res,message)=>{
   
  res.status(400).json({
        status:false,
        message:message,
        
    });
}

module.exports = {errorHandler,ValidationError};