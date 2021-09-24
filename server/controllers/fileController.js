const File = require("../models/FileModel");
const multer = require('multer');
const { response } = require('express');
const fs = require("fs");
let path = require('path');

exports.deleteFile =async (req, res)=>{
   
    const file =  await File.deleteOne({_id: req.params.id} , err=>{
        if(err) console.log(err);
        return res.status(200).send({
            status: "success",
            msg:"Sucessfully Deleted"
     });
    });
    
    
}
exports.updateFile = async (req, res)=>{
   console.log("req body: ",req.body);
    const file =  await File.updateOne({name: req.body.name} ,{link:req.body.link}, err=>{
        if(err) console.log(err);

        console.log("heyy");
        return res.status(200).send({
            status: "success",
            msg:"Sucessfully Updated"
     });
    });
    
    
}
exports.uploadFile = async(req, res)=>{
    const data = {
        ...req.body,
        owner:req.user._id
    }
    const file = await File.create(data);
    console.log(data);
    return res.status(200).send({
            status: "success",
            msg:"Successfully Updated"
     });
}

