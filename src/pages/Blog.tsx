
import { FullBlog } from "../components/FullBlog";
import { useBlogs } from "../hooks"
import { useParams } from "react-router-dom";
const Blog = () => {
    const {id} = useParams()
    
    

    const {loading,blog}=useBlogs({
        id:id ||''
    });
    
    

    if (loading) {
        return <div>loading...</div>
    }
  return (
    <><FullBlog blog={blog!} ></FullBlog>
    
    </>
  )
}

export default Blog