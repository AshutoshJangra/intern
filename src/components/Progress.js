import React, { useState, useEffect } from 'react'
import useStorage from '../hooks/useStorage';
import '../App.css'; 

const Progress = ({file, setFile }) => {
    const {url ,progress} = useStorage(file );

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url, setFile]);

    console.log(url , progress);
    return (
        <div className="progress" style={{width:progress+ '%'}}> {progress} % </div>
    )
}

export default Progress;