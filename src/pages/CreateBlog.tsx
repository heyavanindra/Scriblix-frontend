import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

 type publishinput={
    title:string,
    content:string
 }

const CreateBlog = () => {
    const navigate =useNavigate()
    const [publish,setPublish]= useState<publishinput>({
        title:'',
        content:''
    })
   async function sendpublish(){
  const response=  await axios.post(`https://backend.heyavanindra.workers.dev/api/v1/blog/put`,publish,{
    headers:{
        Authorization:localStorage.getItem('token')
    }
  })
  navigate(`/blog/${response.data.id}`)
  
  

    }
  return (
    <>
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Create a Post</h2>
      
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter the title"
          onChange={(e)=>{
          setPublish({
            ...publish,
            title:e.target.value
          })
          }}
          
        />
      </div>

      <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          rows={6}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Write your content here..."
          onChange={(e)=>{
            setPublish({
              ...publish,
              content:e.target.value
            })
            }}
          
          
        ></textarea>
      </div>

      <button
        
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
         onClick={sendpublish}
      >
        Publish
      </button>
    </div>
    </>
  )
}

export default CreateBlog