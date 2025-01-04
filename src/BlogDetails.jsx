import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";


const BlogDetails = () => {
    const {id}=useParams();
    const {data:blogs,pending,error}=useFetch("http://localhost:8000/blogs/"+id);
    const history=useHistory();

    const handleDelete=() =>{
        fetch(`http://localhost:8000/blogs/${blogs.id}`, {
            method: "DELETE",
          }).then(() => {
            history.push('/');
             
          });
    }

    return ( 
        <div className="blog-details">
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>} 
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;