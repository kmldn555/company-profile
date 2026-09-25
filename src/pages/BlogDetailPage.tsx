import Footer from "@/components/Footer";
import Loading from "@/components/loading/Loading";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/blog";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function BlogDetailPage() {
  const params = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBlog = async () => {
    try {
      const { data } = await axiosInstance.get<Blog>(
        `data/Blogs/${params.objectId}`,
      );
      setBlog(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  if (isLoading) {
    return (
      <div className="container h-full mx-auto justify-between items-center px-6 pb-12 pt-4">
        <div className="flex justify-center items-center h-100">
          <Loading />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-white">
        <div className=" bg-white fixed top-0 left-0 w-full h-15 md:h-20 z-10">
          <Navbar />
        </div>
        {/* container utama */}
        <div className="pt-15 md:pt-20">
          {/* Header */}
          <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#F2F3FF]">
            <p className="text-[20px] md:text-[40px] ">Blog Not Found</p>

            <Link to="/blog">
              <Button className="bg-[#2563EB] text-white hover:text-white hover:bg-blue-400">
                Go to Blogpage
              </Button>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white">
        <div className=" bg-white fixed top-0 left-0 w-full h-15 md:h-20 z-10">
          <Navbar />
        </div>
        {/* container utama */}
        <div className="pt-15 md:pt-20">
          {/* Header */}
          <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#F2F3FF]">
            <div className="flex flex-col">
              <div className="text-3xl font-bold">{blog.title}</div>
              <div className="italic">{blog.author}</div>
              <img
                src={blog?.thumbnail || ""}
                alt="Blog1"
                className="h-80 w-full object-cover rounded-sm"
              />
              <div className="bg-white flex text-justify py-4 px-4 mt-4 rounded-sm shadow-sm/30">
                {blog.content}
              </div>
              <div className="bg-white flex text-justify py-1 px-4 mt-4 rounded-sm shadow-sm/30 w-fit font-bold text-[#004AC6]">
                #{blog.category}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
