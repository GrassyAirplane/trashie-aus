import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>  
      <Hero></Hero>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
