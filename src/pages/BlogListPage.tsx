import Footer from "@/components/Footer";
import Loading from "@/components/loading/Loading";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/blog";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBlogs = async () => {
    try {
      const { data } = await axiosInstance.get<Blog[]>(
        "data/Blogs?sortBy=%60publishDate%60%20desc",
      );
      setBlogs(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="bg-white">
      <div className=" bg-white fixed top-0 left-0 w-full h-15 md:h-20 z-10">
        <Navbar />
      </div>
      {/* container utama */}
      <div className="pt-15 md:pt-20 ">
        {/* Header Section */}
        <div className="bg-[#F2F3FF] ">
          <div className="container h-full mx-auto justify-between items-center px-6 pt-12 pb-4 ">
            <div className="flex flex-col gap-2">
              <div className="flex items-center w-fit gap-2.5 px-3.5 py-1.5 rounded-full bg-white text-black shadow-sm">
                <div className="flex">
                  <div className="h-2.5 w-2.5  bg-[#57DFFE] rounded-full"></div>
                  <div className="h-2.5 w-2.5  bg-[#00687A] rounded-full"></div>
                </div>
                <div className="text-[11px] md:text-[16px]">
                  VELOCORE DISPATCH // ATHLETE RESEARCH
                </div>
              </div>
              <div className="text-[28px] md:text-[40px] text-[#131B2E] font-bold">
                Ideas, Insights & Performance
              </div>
              <div className="text-[17px] text-[#434655]">
                Explore ideas about sports technology, training, data, recovery,
                and athlete performance.
              </div>
            </div>
          </div>
        </div>

        {/* Search Toolbar */}
        <div className="bg-[#F2F3FF] ">
          <div className="container h-full mx-auto justify-between items-center px-6 pt-1 pb-1 bg-[#F2F3FF]">
            <div className="flex bg-white  rounded-sm shadow-sm/30">
              <Input
                placeholder="Search by title or category..."
                className="h-10"
              />
              <img src="IconSearch.svg" alt="IconSearch" className="p-2" />
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-[#F2F3FF]">
          <div className="container h-full mx-auto justify-between items-center px-6 pb-12 pt-4 ">
          {isLoading ? (
            <div className="flex justify-center items-center h-100">
              <Loading />
            </div>
          ) : (
            // container card blog
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {blogs.map((blog) => {
                return (
                  <Link
                    key={blog.objectId}
                    to={`/blogs/${blog.objectId}`}
                    className="h-full"
                  >
                    <div className="flex flex-col h-full bg-[#F2F3FF] shadow-sm/30 rounded-sm">
                      {/* container image */}
                      <div className="relative">
                        <div className="flex absolute w-full top-2">
                          <div className="text-[12px] text-white font-semibold bg-[#004AC6] px-2 py-1 rounded-sm absolute left-2">
                            {blog.category}
                          </div>
                          <div className="text-[12px] text-white font-semibold bg-[#283044] px-2 py-1 rounded-sm absolute right-2">
                            {new Date(blog.publishDate).toLocaleDateString(
                              "id-ID",
                            )}
                          </div>
                        </div>
                        <img
                          src={blog?.thumbnail || ""}
                          alt="ImageVeloTrack"
                          className="w-full rounded-t-sm"
                        />
                      </div>
                      <div className="flex flex-col flex-1 p-4">
                        <p className="text-lg font-bold">{blog.title}</p>
                        <p className="text-[#434655] text-justify">
                          {blog.excerpt}
                        </p>
                        <p className="text-sm mt-auto pt-4 text-right text-[#004AC6]">
                          {blog.author}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default BlogListPage;
