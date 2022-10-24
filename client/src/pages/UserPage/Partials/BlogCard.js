import '../index.css'
function BlogCard({title, description, id}){
    return(
        
            <div className='container text-dark mt-5'>
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title my-2">{ title }</h5>
                        <h6 class="card-subtitle my-2"><span className='fw-bold'>Description: </span>{ description }</h6>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        
        
    )
}
export default BlogCard;