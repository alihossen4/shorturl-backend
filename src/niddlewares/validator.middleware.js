import zod, {ZodError } from "zod";

function validationMiddleware(){
    return async (req, res, next) => {
        try { 
            const {validateUrl} = req.body;
            if(!validateUrl || !validateUrl.startswith('http') || !validateUrl.startswith('https')){
                return res.status(400).json("Invalid Url")
            }
            next();

        } catch (error) {
            if(error instanceof ZodError){
                const formatedError = error.errors.map( err =>({
                    field: err.path[0],
                    message: err.message,
                }));
                throw new Error("Validation Error :", formatedError);
                // return res.status(400).json({success : false, errors: error})
            }
            else{
                throw new Error(error.message)
            }
        }
    }
}
export default validationMiddleware;