import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "NextGen Edu",
  description: "Online Learning Platfrom",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` ${poppins.className} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Navbar></Navbar>
        <main>
          {children}
          <ToastContainer />
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
