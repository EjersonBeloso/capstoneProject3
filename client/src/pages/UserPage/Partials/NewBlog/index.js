import '../../index.css'
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import QuillEditor from '../../../Editor/QuillEditor';
import Navbar from "../../Partials/Navbar";
import {useNavigate} from "react-router-dom"

function NewBlog(){
const Navigate =useNavigate();
const onBack=()=>{
Navigate('/user')
}

    const userId = localStorage.getItem("userId")

    const [data, setData] = useState({
        title: "",
        description: "",
        content: "",
        user: userId
      });

      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      console.log(data)

    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])

    const onEditorChange = (value) => {
        setData({...data, content: value})
        console.log(content)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }

  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitted")
        
        const url = "http://localhost:3001/api/blogs/create";
        Axios.post(url, data).then(response=>console.log(response))
        window.location = "/user";
            }
    
    return(
<>
<Navbar/>
<div className="add-container">
         <div className="bg bg-light text-dark container  add shadow">
            <h4>Create Blog</h4>
            <div className='container py-5'>
            <input className="form-control my-2" id="InputEmail1" placeholder='Title' name='title' onChange={handleChange} value={data.title}/>
            <input className="form-control my-2" id="InputEmail1" placeholder='Description' name='description' onChange={handleChange} value={data.description}/>

             <QuillEditor
                placeholder={"Start Posting Something"}
                onEditorChange={onEditorChange}
                onFilesChange={onFilesChange}
            />

            
            <button onClick={handleSubmit} className='btn publish-btn me-2'>
                Create
            </button>
             <button onClick={onBack} className='btn publish-btn'>
                Back
            </button>
            

            </div>
        </div>
</div>
       </>
    )
}

export default NewBlog;