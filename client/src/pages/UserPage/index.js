import { useEffect, useState } from 'react';
import Axios from 'axios';
import Navbar from './Partials/Navbar'
function UserPage(userData){
    const sendRequest = async()=>{
        const res = await Axios
        .get('http://localhost:3001/api/blogs')
        .catch(error => console.log(error))
        const data = await res.data;
        return data

    }

    const [blogs, setBlogs] = useState();

    useEffect(()=>{
        sendRequest().then(data => console.log(data.blogs))
    }, [])

    return(
        <div>
            <Navbar/>

        </div>
    )
}

export default UserPage;