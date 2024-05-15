"use client";

import Image from "next/image";
import blogData from "@/app/lib/data/blog-data.json";
import { useParams } from "next/navigation";
import { formatDate } from "@/app/lib/script/formatDate";

export default function BlogContentSection() {
  const params = useParams();
  const blogId = params.blogId;

  const blog = blogData.find((b) => b.id.toString() === blogId);

  return (
    <section className="lg:px-14 px-6 pt-20 text-white">
      <h1 className="uppercase font-bold text-4xl text-left mb-6">{blog.title}</h1>
      <div className="space-y-6 lg:w-[90%] w-full mx-auto">
        <div className="relative w-full lg:h-[44rem] h-32">
          <Image src={`/${blog.img}`} fill style={{ objectFit: "cover" }} alt="Blog Image" />
        </div>
        <p className="whitespace-pre-line text-justify leading-loose">{blog.content}</p>
        <p>{formatDate(blog.date)} WIB</p>
      </div>
    </section>
  );
}
