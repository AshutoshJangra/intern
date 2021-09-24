const File = require("../models/FileModel");
const multer = require('multer');
const { response } = require('express');
const fs = require("fs");
let path = require('path');

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

exports.getKeys = (req, res)=>{
    const data = {
        key:1111
    }
    
    return res.status(200).send({
            status: "success",
            data
     });
}
