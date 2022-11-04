import { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../Navbar";
import BlogCard from "../BlogCard";

function ReadingList() {

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
            <div className='  text-dark mt-1 row row-cols-2 row-cols-md-3 g-4 p-5 '>
            {blogs &&
                blogs.map((blog, index)=>(
                    <BlogCard id={blog._id} content={blog.content} title={blog.title} description={blog.description} user={blog.user.userName}/>
                    ))}

            </div>
        </div>
    )
}

export default ReadingList;
