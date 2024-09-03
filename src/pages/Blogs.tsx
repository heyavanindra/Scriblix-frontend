import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { useBlog } from "../hooks";

export const Blogs = () => {

    const {loading, blogs}= useBlog()
    
    
    
    

    if (loading) {
        return <>

<div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
</div>


        
        </>
        
    }

  return (
    <>
      <Navbar></Navbar>
      <div>
        
        
      {blogs && blogs.map((blog) => (
          <BlogCard
          key={blog.id}
            id={blog.id}
            authorName={blog.author.name || ""}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.publishedDate || "N/A"}
          />
        ))}
      </div>

    </>
  );
};
