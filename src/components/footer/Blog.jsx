import blogImage01 from "../../assets/images/blog/blog-footer-01.jpg";

import blogImage02 from "../../assets/images/blog/blog-footer-02.jpg";
import BlogCard from "./BlogCard";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: blogImage01,
      title: "I think really important to design with...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus eros vitae nunc viverra fringilla. Aliquam erat volutpat.",
    },
    {
      id: 2,
      image: blogImage02,
      title: "Recognizing the need is the primary...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus eros vitae nunc viverra fringilla. Aliquam erat volutpat.",
    },
  ];

  return (
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
      <div className="flex flex-col gap-8">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blogImage={blog.image}
            blogText={blog.title}
          />
        ))}
      </div>
    </div>
  );
}
