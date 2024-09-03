import { Navbar } from "./Navbar";

interface BlogProps {
  id: string;
  author: {
    name: string;
  };
  title: string;
  content: string;
  publishedDate: string;
}

interface AvatarProps {
  authorName: string;
}

function Avatar({ authorName }: AvatarProps) {
  const name: string = authorName.split(' ')[0];
  const initials: string = name[0];

  return (
    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-200 rounded-full">
      <span className="font-medium text-gray-600">{initials}</span>
    </div>
  );
}

export const FullBlog = ({ blog }: { blog: BlogProps }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 sm:p-10 lg:p-16 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            {new Date(blog.publishedDate).toLocaleDateString()} | By{" "}
            <span className="text-gray-900 font-semibold">
              {blog.author.name}
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center mb-8">
          <Avatar authorName={blog.author.name} />
          <span className="ml-4 text-xl font-semibold text-gray-900">
            {blog.author.name}
          </span>
        </div>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {blog.content}
        </div>
      </div>
    </>
  );
};
