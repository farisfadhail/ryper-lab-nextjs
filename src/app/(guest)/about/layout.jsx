export default function AboutLayout({ children }) {
  return (
    <main className="bg-gradient-background relative pb-44 overflow-hidden">
      <img src="/vector/vector-about-1.png" alt="" className="w-[75rem] absolute lg:-top-[27rem] -top-10 lg:-left-[40rem] -left-56" />
      <img src="/vector/vector-about-2.png" alt="" className="w-[75rem] absolute lg:-top-80 top-96 lg:-right-[20rem] -right-44" />
      <img src="/vector/vector-about-3.png" alt="" className="w-[75rem] absolute lg:-top-[20rem] top-[40rem] lg:-left-[20rem]" />
      <img src="/vector/vector-about-4.png" alt="" className="w-[137rem] absolute top-[100rem]" />
      <img src="/vector/vector-about-5.png" alt="" className="w-[75rem] absolute bottom-[50rem] right-0" />
      <img src="/vector/vector-about-6.png" alt="" className="w-[75rem] absolute bottom-0" />
      {children}
    </main>
  );
}
