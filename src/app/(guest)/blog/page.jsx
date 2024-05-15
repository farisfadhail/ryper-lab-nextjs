import BlogTitleSection from "@/app/components/molecules/blog-title-section";
import BlogListSection from "@/app/components/molecules/blog-list-section";

export default function BlogPage() {
  return (
    <main className="bg-gradient-background relative overflow-hidden pb-44">
      <img src="/vector/vector-home-5.png" alt="" className="w-[75rem] absolute lg:-top-[25rem] lg:-left-[40rem]" />
      <img src="/vector/vector-home-2.png" alt="" className="lg:w-[75rem] w-[90rem] absolute lg:top-0 top-[30rem] lg:-right-32" />
      <img src="/vector/vector-blog-1.png" alt="" className="w-[75rem] absolute lg:-bottom-44 bottom-0 lg:-left-[40rem] -left-60" />
      <img src="/vector/vector-blog-2.png" alt="" className="w-[75rem] absolute lg:-bottom-96 bottom-96 lg:-right-96 -right-20" />
      <div className="relative z-10">
        <BlogTitleSection />
        <BlogListSection />
      </div>
    </main>
  );
}
