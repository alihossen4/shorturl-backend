class ApiError extends Error{
    constructor(statusCode, message="Something went wrong",errors={},stack=""){
        super(message);
        this.success = false
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.stack = stack;
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
    static badRequest(message="bad request", errors=[]){
        return new ApiError(400, message,errors)
    }
    static unauthorized(message="unauthorized",errors=[]){
        return new ApiError(401,message,errors);
    }
    static forbidden(message="access denied", errors=[]){
        return new ApiError(403,message,errors);
    }
    static serverError(message="server error",errors=[]){
        return new ApiError(500,message,errors);
    }
    static notFound(message="notFound", errors=[]){
        return new ApiError(404,message,errors)
    }
    static conflict(message="conflict", errors=[]){
        return new ApiError(409, message, errors)
    }
    static customError(statusCode,message="something went wrong",errors=[]){
        return new ApiError(statusCode,message,errors)
    }

}

export default ApiError;