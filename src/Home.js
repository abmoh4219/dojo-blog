import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
    
    const {data:blogs,pending,error}=useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
           {error && <div>{error}</div>} 
           {pending && <div>Loading...</div>} 
           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}  
        </div>
    );
}

/*const [name,setName]=useState("mario");
    const [age,setAge]=useState(25);
    const handleClick= () =>{
        setName("abdi");
        setAge(21);
    }
    <p> {name} is {age} years old</p>
    <button onClick={handleClick}>click me</button>    
*/
export default Home;
