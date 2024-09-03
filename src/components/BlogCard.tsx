import { Link } from "react-router-dom";

export interface BlogCardProps {
  id:string
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  
  
}
  
  export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
  }: BlogCardProps) => {
    
    
    
    
    return (
      <Link to={`/blog/${id}`}>
      <div className="max-w-[900px] mx-4 lg:mx-auto my-4 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center p-4 bg-gray-50">
          <Avatar authorName={authorName} />
          <div className="ml-4">
            <span className="block font-bold text-gray-900">{authorName}</span>
            <span className="text-sm text-gray-500">{publishedDate}</span>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-700">{content.slice(0, 100) + "..."}</p>
          <div className="text-sm text-gray-500 mt-4">
            {`${Math.ceil(content.length / 100)} minute read`}
          </div>
        </div>
      </div>
      </Link>
    );
  };
  
  interface AvatarProps {
    authorName: string;
  }
  
  function Avatar({ authorName }: AvatarProps) {
    const name:string= authorName.split(' ')[0]
    const initials:string= name.slice()[0]

    return (
      <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-full">
        <span className="font-medium text-gray-600">{initials}</span>
      </div>
    );
  }
  