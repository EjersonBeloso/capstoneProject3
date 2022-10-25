import { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../Navbar";
import BlogCard from "../BlogCard";

function ReadingList(userData) {

  const sendRequest = async () => {
    const res = await Axios.get(
      `http://localhost:3001/api/blogs`
    ).catch((error) => console.log(error));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  console.log(blogs);

    return(
        <div className="bg">
            <Navbar/>
            <div className='container text-dark mt-5 d-flex '>
            {blogs &&
                blogs.map((blog, index)=>(
                    <BlogCard id={blog._id} title={blog.title} description={blog.description} user={blog.user.userName}/>
                    ))}

            </div>
        </div>
    )
}

export default ReadingList;
