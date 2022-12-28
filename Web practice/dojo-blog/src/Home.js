//import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
/*
    let name = 'mario';
    const handleClick = (e) =>{
        console.log("hello khushi", e);
        name = "palak"
        console.log(name);
    }

    const handleClickAgain = (name,e) =>{
        console.log("Hello, "+name, e.target);
    }

    const [name, setName] = useState('palak');
    const [age, setAge] = useState(16);
 
    const handleClick = () =>{
        setName("khushi");
        setAge(19);
    }
*/  
    //const [name, setName] = useState('khushi');

    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter((blogs) => blogs.id !== id);
    //     setBlogs(newBlogs); 
    // }

    const{data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="Home">
            {/* <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain("Harshil & Khushi",e)}>Click me again</button> */}

            {isLoading && <div>Loading....</div>} 
            {error && <div>{ error } </div>}
            {/* when isLoading is true then it will show Loading... */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <button onClick={()=> setName('harshil')}>Change name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author==='khushi')} title="Khushi's Blogs!"/> */}
        </div>
     );
}
 
export default Home;