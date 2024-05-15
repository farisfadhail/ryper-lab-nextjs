import { Poppins } from "next/font/google";
import Nav from "../components/molecules/nav";
import Footer from "../components/molecules/footer";
import "@/app/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Ryper Lab",
  description: "Ryper Lab Universitas jember",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
