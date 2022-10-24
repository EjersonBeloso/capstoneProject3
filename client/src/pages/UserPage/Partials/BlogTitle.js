function BlogTitle({title}){
    return(
        <li className="nav-item ms-5">
            <a className="nav-link active" aria-current="page" href="#">
                { title }
            </a>
        </li>
        
    )
}
export default BlogTitle;