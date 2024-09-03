import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Blogs } from "./pages/Blogs";
import  Hero  from "./pages/Hero";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";


function App() {
  

  return (
    <>
    
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/blog/:id" element={<Blog></Blog>}></Route>
        <Route path="/blog/publish" element={<CreateBlog></CreateBlog>}></Route>
        
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
