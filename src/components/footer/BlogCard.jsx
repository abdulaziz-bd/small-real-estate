// eslint-disable-next-line react/prop-types
export default function BlogCard({ blogImage, blogText }) {
  return (
    <a href="blog-details.html" className="group flex items-center gap-[22px]">
      <div className="overflow-hidden rounded">
        <img src={blogImage} alt="blog" />
      </div>
      <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
        {blogText}
      </span>
    </a>
  );
}
