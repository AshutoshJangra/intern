import { updateMetadata } from '@firebase/storage';
import React, { useState, useEffect } from 'react'
import {projectStorage , ref , uploadBytesResumable, getDownloadURL} from '../firebase/config';
import axiosService from "../services/axios-service";

const axiosInstance = axiosService.getInstance();


const useStorage =(file , btn)=> {
    const [progress , setProgress] = useState(0);
    const [error , setError] = useState("");
    const [url , setUrl] = useState("");

    console.log("in ss:", file);
    async function updateData(url , name) {
        const data = {
            name,
            link:url
        }
        console.log(data);
        const response = await axiosInstance.put('/api/v1/files/update',data) ;
    
        await response.data;
        
        console.log("response: " , response.data);
      }
    async function postData(url , name) {
        const data = {
            name,
            link:url
        }
        console.log(data);
        const response = await axiosInstance.post('/api/v1/files/upload',data) ;
    
        await response.data;
    
      }

    useEffect(()=>{
        const storageRef = ref(projectStorage ,file.data.name);
        const name = file.data.name ;
        const uploadTask = uploadBytesResumable(storageRef , file.data);
        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100 ;
            setProgress(percentage);
        },(err)=>{
            setError(err);
        },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(url);
            if(file.btn === "file"){
                postData(downloadURL , name);
            }else{
                updateData(downloadURL , file.btn);
            }
        })}
    )},[file])

    return {progress , error , url}
}

export default useStorage;