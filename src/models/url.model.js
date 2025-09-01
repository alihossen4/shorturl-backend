import mongoose, { Schema } from "mongoose";

const UrlSchema = new Schema({
    oldUrl:{
        type: String,
        required : true,
    },
    newUrl:{
        type: String,
        required:true,
        unique:true
    }
    
});

export const Url = mongoose.model.Url || mongoose.model("Url", UrlSchema);