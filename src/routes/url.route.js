import e from "express"

import { nanoid } from "nanoid";
const router = e.Router();
const urlData = {};
router.post("/shorten", (res, req)=>{
   const {url} = req.body;
    if(!url|| !url.startsWith('http')){
        return res.status(400).json({message: "Invalid Url"})
    }
    const id = nanoid(4);
    urlData[id] = url;
})

router.get("/:id", (res,req)=>{
    const {id} = req.params;
    const orginalUrl = urlData[id];
    if(orginalUrl){
        return res.redirect(orginalUrl);
    }else{
        return res.status(404).json("Short link not found")
    }
})

export default router;