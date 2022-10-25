import '../../index.css'
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import QuillEditor from '../../../Editor/QuillEditor';

function NewBlog(){


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
        <div className="bg text-dark">
            <div className='container py-5'>
            <input className="form-control" id="InputEmail1" placeholder='Title' name='title' onChange={handleChange} value={data.title}/>
            <input className="form-control" id="InputEmail1" placeholder='Description' name='description' onChange={handleChange} value={data.description}/>

             <QuillEditor
                placeholder={"Start Posting Something"}
                onEditorChange={onEditorChange}
                onFilesChange={onFilesChange}
            />

            
            <button onClick={handleSubmit} className='btn btn-orange'>
                Create
            </button>
            
            

            </div>
        </div>
    )
}

export default NewBlog;