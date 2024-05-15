"use client";

import { Icon } from "@iconify/react";
import BlogCard from "../atoms/blog-card";
import Pagination from "./pagination";
import { useState } from "react";
import blogData from "@/app/lib/data/blog-data.json";

export default function BlogListSection() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);
  const maxPages = Math.ceil(blogData.length / itemsPerPage);

  const sortedBlogs = blogData.sort((a, b) => new Date(b.date) - new Date(a.date)).filter((blog) => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const handleMoreClick = () => {
    setShowMore(!showMore);
    setItemsPerPage(itemsPerPage + 3);
  };

  return (
    <section className="pt-20 text-white lg:px-14 px-6">
      <p className="font-bold lg:text-5xl text-2xl">NEWEST POST</p>
      <form className="flex items-center lg:gap-4 gap-2 mt-4 lg:justify-end justify-center">
        <input type="text" placeholder="Cari Blog..." className="bg-transparent border focus:border-white border-white rounded-lg px-4 py-1.5 lg:w-1/3 w-4/5" value={searchTerm} onChange={handleSearchChange} />
        <button className="p-2.5 rounded-lg border border-white">
          <Icon icon="bi:search" />
        </button>
      </form>

      <div className="grid lg:grid-cols-3 grid-cols-2 my-10 lg:gap-11 gap-6 lg:w-[90%] w-full mx-auto">
        {currentBlogs.map((blog, index) => (
          <BlogCard key={index} id={blog.id} title={blog.title} img={blog.img} date={blog.date} desc={blog.content} />
        ))}
      </div>

      {!showMore && (
        <button onClick={handleMoreClick} className="text-bold bg-purple-900 py-2 px-12 rounded-lg w-fit mx-auto block">
          More
        </button>
      )}

      {showMore && sortedBlogs.length > itemsPerPage && <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={maxPages} />}
    </section>
  );
}
