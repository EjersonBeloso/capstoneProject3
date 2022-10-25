import  Axios  from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from '../Navbar'
import "../../index.css"


function ViewBlog(){
    const { id } = useParams()
    const variable = {
        id:id
    }
    
    const sendRequest = async () => {
        const res = await Axios.get(
          `http://localhost:3001/api/blogs/${id}`
        ).catch((error) => console.log(error));
        const data = await res.data;
        console.log(data.blog);
        return data;
      };

      const userRequest = async () => {
        const res = await Axios.get(
          `http://localhost:3001/api/users/${blog.user}`
        )
        .catch((error) => console.log(error));
        const data = await res.data;
        console.log(data)
        return data
      };
    
      const [blog, setBlog] = useState({});
      const [user, setUser] = useState({})
    
      useEffect(() => {
        sendRequest().then((data) => setBlog(data.blog))
      }, []);

    

    
 
    return(
        <div className=" text-dark">
            <Navbar/>
            <div className=" view text-center mt-5">
                <p>Creator: {user.userName}</p>
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
                <div dangerouslySetInnerHTML={{__html: blog.content}}/>
                <p>{blog.createdAt}</p>
                <p>{blog.updatedAt}</p>
                <p>{blog.updatedAt}</p>
            </div>
            
        </div>
    )
}

export default ViewBlog