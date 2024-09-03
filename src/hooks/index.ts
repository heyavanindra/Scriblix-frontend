import axios from "axios";
import { useEffect, useState } from "react";

interface BlogType  {
  id: string;
  author: {
    name: string;
  };
  title: string;
  content: string;
  publishedDate: string;
};

export const useBlogs = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogType>(); 

  useEffect(() => {
    const fetchBlogs = async () => {
     try {
      const response= await axios.get(
        `https://backend.heyavanindra.workers.dev/api/v1/blog/${id}`,
        {
          headers: {
            authorization: localStorage.getItem("token") || "",
          },
        }
      );
      
       
      
      setBlog(response.data.blog)
      
      
      setLoading(false)
      
     } catch (error) {
      console.error("Error fetching blogs:", error);
      
      
     }
    };
    fetchBlogs();
  }, [id]);
  return {
    loading,
    blog
  }
};

export const useBlog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://backend.heyavanindra.workers.dev/api/v1/blog/bulk`,
          {
            headers: {
              authorization: localStorage.getItem("token") || "",
            },
          }
        );

        

        setBlogs(response.data.blog);


        // Assuming `response.data.blogs` is an array
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
  };
};
