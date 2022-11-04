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

    return data;
  };

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.user.blogs));
  }, []);


  const myFunction = ()=> {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



    return(
        <div className='bg-user'>
            <Navbar/>
            <div className='container text-dark mt-5'>
  
                <table className="table" id="myTable">
                        <thead>
                            <tr>
                            <th scope="col" className='fs-5'>TITLE</th>
                            <th scope="col" className='fs-5'>DESCRIPTION</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                {blogs &&
                blogs.map((blog, index)=>(
                    <BlogTableBody id={blog._id} title={blog.title} description={blog.description} user={blog.user.userName}/>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default UserPage;
