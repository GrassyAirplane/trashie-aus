import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";
import About from "@/components/About";

export default function Home() {
  return (
    <>  
      <div className="home-container">
        <Hero></Hero>
        {/* <About></About> */}
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}
