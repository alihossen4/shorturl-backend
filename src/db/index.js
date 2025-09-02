import mongoose from "mongoose"
import { MONGO_URL } from "../constants.js"
import ApiError from "../utils/apiError.js";
const MS_Delay = 1000;
const Max_Retry = 3;
let id;
const dbConnection = async(atempt=1) =>{
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Database connected");
        
    } catch (error) {
        clearInterval(id);
        if(atempt<=Max_Retry){
            console.log("Database connection faild!");
            
            let delay = MS_Delay * 2**(atempt-1);
            console.log(`Retrying in ${delay/1000}s`);
            id= setTimeout(()=>{
                dbConnection(atempt+1)
            },delay);
        }
        else{
            console.log("Maximum retry reached!");
            throw ApiError.badRequest("Database error");
        }
    }
}

export default dbConnection;