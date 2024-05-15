export default function BlogShowLayout({ children }) {
  return (
    <main className="bg-gradient-background lg:pt-24 pt-10 pb-44 relative overflow-hidden">
      <img src="/vector/vector-blogid-1.png" alt="" className="w-[75rem] absolute lg:-left-[40rem] -left-52 top-1/2" />
      <img src="/vector/vector-blogid-2.png" alt="" className="w-[75rem] absolute lg:-right-[30rem] -right-32 top-1/2" />
      {children}
    </main>
  );
}
