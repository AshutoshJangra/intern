const File = require("../models/FileModel");
const multer = require('multer');
const { response } = require('express');
const fs = require("fs");
let path = require('path');


// exports.getPublicUser = catchAsync(async (req, res) => {
// 	const number = req.query.number * 1;
// 	const code = req.query.code * 1;

// 	const user = await User.findOne({ userNum: number }).populate("rewards");

// });

let storage = multer.diskStorage({
    destination: (req, file , cb)=>{
        cb(null , req.fullpath)
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({storage:storage});

exports.user = (req , res , next) => {
    req.username = "johnCena";
    req.fullpath = path.join(__dirname , `../../public/uploads/${req.username}`);
    console.log("ehuuuu")
    // fs.mkdir(req.fullpath, function(err) {
    //     if (err) {
    //         if (err.code == 'EEXIST') console.log(err) // Ignore the error if the folder already exists
    //          // Something else went wrong
    //     } else console.log("created"); // Successfully created folder
    // });

    next();
}

exports.deleteFile = (req, res)=>{
   
    const file =  File.deleteOne({_id: req.params.id} , err=>{
        if(err) console.log(err);
        return res.status(200).send({
            status: "success",
            msg:"Sucessfully Deleted"
     });
    });
    
    
}
exports.updateFile = (req, res)=>{
   console.log("req body: ",req.body);
    const file =  File.updateOne({name: req.body.name} ,{link:req.body.link}, err=>{
        if(err) console.log(err);

        console.log("heyy");
        return res.status(200).send({
            status: "success",
            msg:"Sucessfully Updated"
     });
    });
    
    
}
exports.uploadFile = (req, res)=>{
    const data = {
        ...req.body,
        owner:req.user._id
    }
    const file =  File.create(data);
    
    return res.status(200).send({
            status: "success"
     });
}
