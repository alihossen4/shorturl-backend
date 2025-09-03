import { nanoid } from "nanoid";

const urlData = {};
const shortenUrl = async(res, req) =>{
    const {url} = req.body;
    const shortCode = nanoid(6);
    urlData[shortCode] = url;

}
const shortCode = (res, req) =>{
    const {shortCode} = req.params;
    const orginalUrl = urlData[shortCode];
    if(orginalUrl){
        return res.redirect(orginalUrl);
    }else{
        return res.status(404).json('Short link not found')
    }
}

export {shortenUrl, shortCode}