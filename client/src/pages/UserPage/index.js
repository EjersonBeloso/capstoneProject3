import { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "./Partials/Navbar";
import BlogTableBody from "./Partials/BlogTableBody";

function UserPage(userData) {
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    const res = await Axios.get(
      `http://localhost:3001/api/blogs/user/${id}`
    ).catch((error) => console.log(error));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.user.blogs));
  }, []);

  console.log(blogs);

  return (
    <div className="bg">
      <Navbar />
      <div className="container text-dark mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">TITLE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {blogs &&
            blogs.map((blog, index) => (
              <BlogTableBody
                title={blog.title}
                description={blog.description}
                user={blog.user.userName}
              />
            ))}
        </table>
      </div>
    </div>
  );
}

export default UserPage;
